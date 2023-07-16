import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function KakaoLogin() {
  const location = useLocation();
  const [token, setToken] = useState();
  const [nickName, setNickName] = useState(); //닉네임
  const [isLoggined, setIsLoggined] = useState(false); // 로그인 여부 [true, false]
  const navigate = useNavigate();
  const params = new URL(document.location.toString()).searchParams;
  const AUTHORIZE_CODE = params.get("code");
  const getToken = async () => {
    
    const grant_type = "authorization_code";
    const CLIENT_ID = process.env.REACT_APP_REST_API_KEY;
    const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
    try {
      //토큰 가져오기
      const res = await axios.post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${AUTHORIZE_CODE}`,
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      );
      setToken(res.data.access_token);
    } catch (error) {
      console.log("토큰에러 " + error);
    }
  };

  useEffect(() => {
    if (AUTHORIZE_CODE) {
      getToken();
    }
  }, [AUTHORIZE_CODE]);

  const getKakaoUser = async () => {
    if (token) {
      try {
        //토큰을 이용하여 사용자 정보 가져오기
        const kakaoUser = await axios.get(`https://kapi.kakao.com/v2/user/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        //닉네임 상태 업데이트
        setNickName(kakaoUser.data.properties.nickname);
        localStorage.setItem("nickname", nickName) // 로컬스토리지에 저장
        setIsLoggined(true);
        nickName ? navigate("/news") : null;
        // await axios.post('/api/', { //backend통신
        //   userName : userName,
        //   userEmail : kakaoUser.data.properties.email
        // })
        // .then((response) => {
        //     console.log("전송 성공" + response.data)
        // })
        // .catch((error) => {
        //     console.log(error);
        // });
      } catch (error) {
        console.log("사용자 정보 에러: " + error);
      }
    }
  };
  getKakaoUser();
  return <></>;
}

export default KakaoLogin;
