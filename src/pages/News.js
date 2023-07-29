import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./News.module.css";
const News = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/newsdetail");
  }, [navigate]);

  const onJobsClick = useCallback(() => {
    navigate("/jobs");
  }, [navigate]);

  const onSearchClick = useCallback(() => {
    navigate("/search");
  }, [navigate]);

  const onCommuClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const onMyPageClick = useCallback(() => {
    navigate("/mypage");
  }, [navigate]);

  return (
    <div className={styles.news}>
      <div className={styles.div}>화면을 옆으로 넘겨주세요.</div>
      <b className={styles.b}>
        <p className={styles.p}>{`${localStorage.getItem("nickname")}님을 위한 `}</p>
        <p className={styles.p}>오늘의 추천 뉴스</p>
      </b>
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <div className={styles.click}>Click</div>
      </div>
      <div className={styles.menu1homelight}>
        <div className={styles.navigationmenuLeftParent}>
          <div className={styles.navigationmenuLeft}>
            <div
              className={styles.navigationmenuHome}
              onClick={onJobsClick}
            >
              <img
                className={styles.iconBriefcase}
                alt=""
                src="/-icon-briefcase.svg"
              />
              <div className={styles.job}>JOB</div>
            </div>
            <div
              className={styles.navigationmenuHome1}
              onClick={onSearchClick}
            >
              <img className={styles.iconBriefcase} alt="" src="/search.svg" />
              <div className={styles.job}>Search</div>
            </div>
          </div>
          <div className={styles.navigationmenuRight}>
            <div
              className={styles.navigationmenuHome2}
              onClick={onCommuClick}
            >
              <img
                className={styles.iconMessages2}
                alt=""
                src="/-icon-messages-25.svg"
              />
              <div className={styles.community}>Community</div>
            </div>
            <div
              className={styles.navigationmenuHome3}
              onClick={onMyPageClick}
            >
              <img className={styles.iconBriefcase} alt="" src="/user5.svg" />
              <div className={styles.job}>Profile</div>
            </div>
          </div>
          <div className={styles.navigationmenuHome4}>
            <div className={styles.homeWrapper}>
              <img className={styles.iconBriefcase} alt="" src="/home1.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.homeBarmini}>
        <div className={styles.homeIndicator} />
      </div>
      <div className={styles.cardnewsParent}>
        <div className={styles.cardnews}>
          <img className={styles.image9Icon} alt="" src="/image-9@2x.png" />
          <img className={styles.image9Icon} alt="" src="/image-10@2x.png" />
          <img className={styles.image9Icon} alt="" src="/image-11@2x.png" />
          <img className={styles.image9Icon} alt="" src="/image-12@2x.png" />
          <img className={styles.image9Icon} alt="" src="/image-13@2x.png" />
          <img className={styles.image9Icon} alt="" src="/image-14@2x.png" />
          <img className={styles.image9Icon} alt="" src="/image-15@2x.png" />
          <img className={styles.image9Icon} alt="" src="/image-16@2x.png" />
          <img className={styles.image9Icon} alt="" src="/image-17@2x.png" />
          <img className={styles.image9Icon} alt="" src="/image-18@2x.png" />
        </div>
        <img className={styles.frameChild} alt="" src="/group-12.svg" />
        <img className={styles.frameItem} alt="" src="/group-13.svg" />
        <img className={styles.frameInner} alt="" src="/group-21.svg" />
        <img className={styles.groupIcon} alt="" src="/group-31.svg" />
        <img className={styles.frameChild1} alt="" src="/group-9.svg" />
        <img className={styles.frameChild2} alt="" src="/group-10.svg" />
        <img className={styles.frameChild3} alt="" src="/group-111.svg" />
        <img className={styles.frameChild4} alt="" src="/group-121.svg" />
        <img className={styles.frameChild5} alt="" src="/group-111.svg" />
        <img className={styles.frameChild6} alt="" src="/group-10.svg" />
      </div>
    </div>
  );
};

export default News;
