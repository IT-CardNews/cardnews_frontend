import { useCallback } from "react";
import styles from "./Landing.module.css";
const Landing = () => {
  const onRectangleClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='interestContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.landing}>
      <img className={styles.icon} alt="" src="/--0013-1@2x.png" />
      <img
        className={styles.landingChild}
        alt=""
        src="/rectangle-2.svg"
        onClick={onRectangleClick}
      />
      <div className={styles.eatIt}>EAT IT을 카카오로 시작하기</div>
    </div>
  );
};

export default Landing;
