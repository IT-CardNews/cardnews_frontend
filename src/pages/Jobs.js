import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Jobs.module.css";
const Jobs = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/jobsdetail");
  }, [navigate]);

  const onSearchClick = useCallback(() => {
    navigate("/search");
  }, [navigate]);

  const onCommuClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const onNewsClick = useCallback(() => {
    navigate("/news");
  }, [navigate]);

  return (
    <div className={styles.jobs}>
      <div className={styles.div}>화면을 옆으로 넘겨주세요.</div>
      <b className={styles.b}>
        <p className={styles.p}>{`${localStorage.getItem("nickname")}님을 위한 `}</p>
        <p className={styles.p}>취업 공고</p>
      </b>
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <div className={styles.click}>Click</div>
      </div>
      <div className={styles.menu1homelight}>
        <div className={styles.navigationmenuLeftParent}>
          <div className={styles.navigationmenuLeft}>
            <div className={styles.navigationmenuHome}>
              <img
                className={styles.iconBriefcase}
                alt=""
                src="https://sahayeon0717.blob.core.windows.net/media/-icon-briefcase1.svg"
              />
              <div className={styles.job}>JOB</div>
            </div>
            <div
              className={styles.navigationmenuHome1}
              onClick={onSearchClick}
            >
              <img className={styles.searchIcon} alt="" src="https://sahayeon0717.blob.core.windows.net/media/search.svg" />
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
                src="https://sahayeon0717.blob.core.windows.net/media/-icon-messages-23.svg"
              />
              <div className={styles.community}>Community</div>
            </div>
            <div className={styles.navigationmenuHome3}>
              <img className={styles.searchIcon} alt="" src="https://sahayeon0717.blob.core.windows.net/media/user3.svg" />
              <div className={styles.job}>Profile</div>
            </div>
          </div>
          <div
            className={styles.navigationmenuHome4}
            onClick={onNewsClick}
          >
            <div className={styles.homelinearWrapper}>
              <img
                className={styles.searchIcon}
                alt=""
                src="https://sahayeon0717.blob.core.windows.net/media/homelinear1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.homeBarmini}>
        <div className={styles.homeIndicator} />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.maskGroupParent}>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="https://sahayeon0717.blob.core.windows.net/media/mask-group@2x.png"
          />
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="https://sahayeon0717.blob.core.windows.net/media/mask-group1@2x.png"
          />
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="https://sahayeon0717.blob.core.windows.net/media/mask-group2@2x.png"
          />
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="https://sahayeon0717.blob.core.windows.net/media/mask-group3@2x.png"
          />
          <img className={styles.maskGroupIcon} alt="" src="https://sahayeon0717.blob.core.windows.net/media/group-67@2x.png" />
        </div>
        <img className={styles.frameItem} alt="" src="https://sahayeon0717.blob.core.windows.net/media/group-1.svg" />
        <img className={styles.frameInner} alt="" src="https://sahayeon0717.blob.core.windows.net/media/group-2.svg" />
        <img className={styles.groupIcon} alt="" src="https://sahayeon0717.blob.core.windows.net/media/group-6.svg" />
        <img className={styles.frameChild1} alt="" src="https://sahayeon0717.blob.core.windows.net/media/group-3.svg" />
        <img className={styles.frameChild2} alt="" src="https://sahayeon0717.blob.core.windows.net/media/group-11.svg" />
      </div>
    </div>
  );
};

export default Jobs;
