import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Jobs.module.css";
import React, { useEffect, useState } from "react";
import axios from 'axios';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  useEffect(() => {
    // Flask API로부터 채용 정보를 가져옵니다.
    axios.get("http://localhost:5000/api/jobs").then((response) => {
      setJobs(response.data); // API가 JSON 형식의 채용 정보 배열을 반환한다고 가정합니다.
    });
  }, []);

  // 채용 정보를 표시하는 JSX 코드
  const renderJobs = () => {
    if (currentImageIndex === null || !jobs[currentImageIndex]) return null;

    const job = jobs[currentImageIndex];

    return (
      <div key={job.id} className={styles.jobCard}>
        <h3 className={styles.jobAdd}>{job.jobAdd}</h3>
        <p className={styles.jobField}>{job.jobField}</p>
        <p className={styles.jobDate}>{job.jobDate}</p>
        <p className={styles.requirements}>{job.requirements}</p>
        {job.jobImage && (
          <img className={styles.jobImage} alt="Job Image" src={job.jobImage} />
        )}
      </div>
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % jobs.length);
  };

  const navigate = useNavigate();

  // Jobs 컴포넌트
  const onGroupContainerClick = useCallback((index) => {
    const selectedJob = jobs[index];
    navigate("/jobsdetail", { state: { job: selectedJob } });
  }, [navigate, jobs]);

  const onNavigationmenuHome1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onNavigationmenuHome2Click = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const onNavigationmenuHome4Click = useCallback(() => {
    navigate("/news");
  }, [navigate]);

  return (
    <div className={styles.jobs}>
      <div className={styles.jobList}>
        {jobs.length > 0 ? renderJobs() : <p>No job listings found.</p>}
      </div>
      <div className={styles.div}>화면을 옆으로 넘겨주세요.</div>
      <b className={styles.b}>
        <p className={styles.p}>{`00님을 위한 `}</p>
        <p className={styles.p}>취업 공고</p>
      </b>
      <div className={styles.rectangleParent} onClick={() => onGroupContainerClick(currentImageIndex)}>
        <div className={styles.groupChild} />
        <div className={styles.click}>Click</div>
      </div>
      <div className={styles.rectangleParent2} onClick={handleNextClick}>
        <div className={styles.groupChild} />
        <div className={styles.click}>Next</div>
      </div>
      <div className={styles.menu1homelight}>
        <div className={styles.navigationmenuLeftParent}>
          <div className={styles.navigationmenuLeft}>
            <div className={styles.navigationmenuHome}>
              <img
                className={styles.iconBriefcase}
                alt=""
                src="/-icon-briefcase1.svg"
              />
              <div className={styles.job}>JOB</div>
            </div>
            <div
              className={styles.navigationmenuHome1}
              onClick={onNavigationmenuHome1Click}
            >
              <img className={styles.searchIcon} alt="" src="/search.svg" />
              <div className={styles.job}>Search</div>
            </div>
          </div>
          <div className={styles.navigationmenuRight}>
            <div
              className={styles.navigationmenuHome2}
              onClick={onNavigationmenuHome2Click}
            >
              <img
                className={styles.iconMessages2}
                alt=""
                src="/-icon-messages-23.svg"
              />
              <div className={styles.community}>Community</div>
            </div>
            <div className={styles.navigationmenuHome3}>
              <img className={styles.searchIcon} alt="" src="/user3.svg" />
              <div className={styles.job}>Profile</div>
            </div>
          </div>
          <div
            className={styles.navigationmenuHome4}
            onClick={onNavigationmenuHome4Click}
          >
            <div className={styles.homelinearWrapper}>
              <img
                className={styles.searchIcon}
                alt=""
                src="/homelinear1.svg"
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
          {jobs.map((job, index) => (
            <img
              key={index}
              className={styles.maskGroupIcon}
              alt=""
              src={job.jobImage}
              onClick={() => onGroupContainerClick(index)}
            />
          ))}
        </div>
        <img className={styles.frameItem} alt="" src="/group-1.svg" />
        <img className={styles.frameInner} alt="" src="/group-2.svg" />
        <img className={styles.groupIcon} alt="" src="/group-6.svg" />
        <img className={styles.frameChild1} alt="" src="/group-3.svg" />
        <img className={styles.frameChild2} alt="" src="/group-11.svg" />
      </div>
    </div>
  );
};

export default Jobs;
