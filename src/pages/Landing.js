import React, { useEffect } from 'react';
import axios from 'axios';
import styles from "./Landing.module.css";

const Landing = () => {
	useEffect(() => {
		// componentDidMount 역할을 하는 부분
		document.querySelector("#kakao").addEventListener('click', onKakao);
		document.querySelector("#logout").addEventListener('click', onLogout);
	
		autoLogin();
		
		redirectPage();
	
		// componentWillUnmount 역할을 하는 부분
		return () => {
		  document.querySelector("#kakao").removeEventListener('click', onKakao);
		  document.querySelector("#logout").removeEventListener('click', onLogout);
		};
	  }, []);

  // 팝업창 열기
  const openWindowPopup = (url, name) => {
    const options = 'top=10, left=10, width=500, height=600, status=no, menubar=no, toolbar=no, resizable=no';
    return window.open(url, name, options);
  }

  // 카카오 OAuth
  const onKakao = async () => {
    document.querySelector("#loading").classList.remove('display_none');

    try {
      const response = await axios.get('https://eatit-backend.azurewebsites.net/oauth/url');
      const url = response.data.kakao_oauth_url;

      const newWindow = openWindowPopup(url, "카카오톡 로그인");

      const checkConnect = setInterval(function () {
        if (!newWindow || !newWindow.closed) return;
        clearInterval(checkConnect);

        if (getCookie('logined') === 'true') {
			newWindow.close();
			window.location.href = '/jobs';

        } else {
          document.querySelector("#loading").classList.add('display_none');
        }
      }, 1000);
    } catch (error) {
      console.log('Error:', error);
      document.querySelector("#loading").classList.add('display_none');
    }
  }

  // OAuth 로그인 후, 리다이렉트 페이지
  const redirectPage = () => {
    // 만약 /oauth 으로 이동된다면 자동으로 해당 창은 닫습니다.
    const pathname = window.location.pathname;
    if (pathname.startsWith('https://eatit-backend.azurewebsites.net/oauth')) {
      window.close();
    }
  }

  // 자동 로그인
  const autoLogin = async () => {
    try {
      const response = await fetch("https://eatit-backend.azurewebsites.net/userinfo", {
        headers: { "Content-Type": "application/json" },
        method: "GET"
      });
      const data = await response.json();

      if (!!data['msg']) {
        if (data['msg'] === `Missing cookie "access_token_cookie"`) {
          console.log("자동로그인 실패");
          return;
        } else if (data['msg'] === `Token has expired`) {
          console.log("Access Token 만료");
          refreshToken();
          return;
        }
      } else {
        console.log("자동로그인 성공");
        const nickname = document.querySelector("#nickname");
        const thumnail = document.querySelector("#thumnail");

        nickname.textContent = `${data.nickname}`;
        thumnail.src = data.profile;

        document.querySelector('#kakao').classList.add('display_none');
        document.querySelector('#logout').classList.remove('display_none');
        nickname.classList.remove('display_none');
        thumnail.classList.remove('display_none');
        localStorage.setItem("nickname", data.nickname);
      }
    } catch (error) {
      console.log(`Error: ${error}`);
      return;
    }
  }

  // 토큰 재발급
  const refreshToken = async () => {
    try {
      const response = await fetch("https://eatit-backend.azurewebsites.net/token/refresh", {
        headers: { "Content-Type": "application/json" },
        method: "GET"
      });
      const data = await response.json();

      if (data.result) {
        console.log("Access Token 갱신");
        autoLogin();
      } else {
        if (data.msg === `Token has expired`) {
          console.log("Refresh Token 만료");

          document.querySelector('#kakao').classList.remove('display_none');
          document.querySelector('#logout').classList.add('display_none');
          document.querySelector("#nickname").classList.add('display_none');
          document.querySelector("#thumnail").classList.add('display_none');

          onKakao();
          return;
        }

        fetch("https://eatit-backend.azurewebsites.net/token/remove", {
          headers: { "Content-Type": "application/json" },
          method: "GET"
        });
        alert("로그인을 다시 해주세요!");

        document.querySelector('#kakao').classList.remove('display_none');
        document.querySelector('#logout').classList.add('display_none');
        document.querySelector("#nickname").classList.add('display_none');
        document.querySelector("#thumnail").classList.add('display_none');
      }
    } catch (error) {
      console.log('Error:', error);
      return;
    }
  }

  // 로그아웃
  const onLogout = async () => {
    try {
      const response = await fetch("https://eatit-backend.azurewebsites.net/token/remove", {
        headers: { "Content-Type": "application/json" },
        method: "GET"
      });
      const data = await response.json();

      if (data.result) {
        console.log("로그아웃 성공");
        alert("정상적으로 로그아웃이 되었습니다.");
        window.location.reload();
      } else {
        console.log("로그아웃 실패");
      }
    } catch (error) {
      console.log('Error:', error);
    }
  }

  const getCookie = (cookieName) => {
    let cookieValue = null;
    if (document.cookie) {
      const array = document.cookie.split((escape(cookieName) + '='));
      if (array.length >= 2) {
        const arraySub = array[1].split(';');
        cookieValue = unescape(arraySub[0]);
      }
    }
    return cookieValue;
  }

  return (
    <>
  <div onClick={onKakao} id="kakao" className={styles.landing}>
    <img className={styles.icon} alt="" src="/--0013-1@2x.png" />
    <img className={styles.landingChild} alt="" src="/rectangle-2.svg" />
    <div className={styles.eatIt}>EAT IT을 카카오로 시작하기</div>
  </div>

  <img id="thumnail" src="" className={`${styles.thumnail} ${styles.display_none}`} />
  <div id="nickname" className={`${styles.nickname} ${styles.display_none}`}></div>

  <div onClick={onLogout} id="logout" className={`${styles.logout} ${styles.display_none}`}>
    <span>로그아웃</span>
  </div>

  <div id="loading" className={`${styles.loading} ${styles.display_none}`}>
    <div className={styles.loading_circle}></div>
  </div>
</>


  );
}

export default Landing;
