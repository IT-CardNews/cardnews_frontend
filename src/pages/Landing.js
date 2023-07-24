import styles from "./Landing.module.css";
import KakaoLogin from "../login/kakaologin";
const Landing = () => {
  const onClick = () => { //로그인페이지 이동
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;
  };
  KakaoLogin();
  return (
    <div onClick={onClick} className={styles.landing}>
      <img className={styles.icon} alt="" src="https://sahayeon0717.blob.core.windows.net/media/mainlogo.png" />
      <img className={styles.landingChild} alt="" src="https://sahayeon0717.blob.core.windows.net/media/rectangle-2.svg" />
      <div className={styles.eatIt}>EAT IT을 카카오로 시작하기</div>
    </div>
  );
};

export default Landing;
