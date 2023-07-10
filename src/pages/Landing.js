import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Landing.module.css";
const Landing = () => {
  const navigate = useNavigate();
  const onClick = useCallback(() => {
    navigate("/interest");
  }, [navigate]);

  return (
    <div  onClick={onClick} className={styles.landing}>
      <img className={styles.icon} alt="" src="/--0013-1@2x.png" />
      <img
        className={styles.landingChild}
        alt=""
        src="/rectangle-2.svg"
       
      />
      <div className={styles.eatIt}>EAT IT을 카카오로 시작하기</div>
    </div>
  );
};

export default Landing;
