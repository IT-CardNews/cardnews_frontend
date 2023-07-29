import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./JobsDetail.module.css";

const JobsDetail = () => {
  const location = useLocation();
  const job = location.state?.job;

  console.log("Location state:", location.state);

  const navigate = useNavigate();

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

  const onNewsClick = useCallback(() => {
    navigate("/news");
  }, [navigate]);

  return (
    <div className={styles.jobsdetail}>
      <b className={styles.b}>
        <p className={styles.p}>{`${localStorage.getItem("nickname")}님을 위한 `}</p>
        <p className={styles.p}>취업 공고</p>
      </b>
      {job && (
        <div>
          <h3 className={styles.jobAdd}>{job.jobAdd}</h3>
          <p className={styles.jobField}>{job.jobField}</p>
          <p className={styles.jobDate}>{job.jobDate}</p>
          <p className={styles.requirements}>{job.requirements}</p>
          {job.jobImage && (
            <img className={styles.jobImage} alt="Job Image" src={job.jobImage} />
          )}
        </div>
      )}

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
                src="/-icon-briefcase1.svg"
              />
              <div className={styles.job}>{` `}</div>
            </div>
            <div
              className={styles.navigationmenuHome1}
              onClick={onSearchClick}
            >
              <img className={styles.searchIcon} alt="" src="/search.svg" />
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
                src="/-icon-messages-22.svg"
              />
              <div className={styles.community}>Community</div>
            </div>
            <div
              className={styles.navigationmenuHome3}
              onClick={onMyPageClick}
            >
              <img className={styles.searchIcon} alt="" src="/user2.svg" />
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
                src="/homelinear2.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.homeBarmini}>
        <div className={styles.homeIndicator} />
      </div>
    </div>
  );
};

export default JobsDetail;
