import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Jobs.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Flask API로부터 채용 정보를 가져옵니다.
    axios.get("https://eatit-backend.azurewebsites.net/test/job_info").then((response) => {
      setJobs(response.data); // API가 JSON 형식의 채용 정보 배열을 반환
    });
    getJobsCard();
  }, []);


//취업정보 카드 가져오기
const getJobsCard = async () => {
  try {
    const response = await axios.get(
      "https://eatit-backend.azurewebsites.net/test/cardnews_info"
    );
    console.log("취업정보카드 가져오기 성공: ", response);
  } catch (error) {
    console.error("취업 정보카드 가져오기 에러 발생: ", error);
    if (error.response) {
      // 서버가 오류응답을 반환한 경우
      console.error("취업 정보카드 서버 응답: ", error.response.data);
    }
  }
};
//취업정보 response.data
// [
//   {
//     "id": 0,
//     "jobAdd": "string",
//     "jobImage": "string",
//     "jobDate": "string",
//     "jobField": "string",
//     "requirements": "string"
//   }
// ]


  // 채용 정보를 표시하는 JSX 코드
  const renderJobs = () => {
    if (!jobs[currentImageIndex]) return null;

    const job = jobs[currentImageIndex];
    const imageSource = job.jobImage.replace(/\\/g, "/"); // 이미지 URL 가져오기
    console.log("Image Source:", imageSource); // 이미지 경로 출력
  
    return (
      <div key={job.id} className={styles.jobCard}>
        {job.jobImage && (
          <img
            className={styles.jobImage}
            alt="Job Image"
            src={{ imageSource }}
          />
        )}
      </div>
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % jobs.length);
  };

  const navigate = useNavigate();

  // Jobs 컴포넌트
  const onGroupContainerClick = useCallback(
    (index) => {
      const selectedJob = jobs[index];
      navigate("/jobsdetail", { state: { job: selectedJob } });
    },
    [navigate, jobs]
  );

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
      <div className={styles.jobList}>
        {jobs.length > 0 ? renderJobs() : <p>No job listings found.</p>}
      </div>
      <b className={styles.b}>
        <p className={styles.p}>{`${localStorage.getItem(
          "nickname"
        )}님을 위한 `}</p>
        <p className={styles.p}>취업 공고</p>
      </b>
      <div
        className={styles.rectangleParent}
        onClick={() => onGroupContainerClick(currentImageIndex)}>
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
                src="https://itimgstorage.blob.core.windows.net/source/-icon-briefcase1.svg"
              />
              <div className={styles.job}>JOB</div>
            </div>
            <div className={styles.navigationmenuHome1} onClick={onSearchClick}>
              <img
                className={styles.searchIcon}
                alt=""
                src="https://itimgstorage.blob.core.windows.net/source/search.svg"
              />
              <div className={styles.job}>Search</div>
            </div>
          </div>
          <div className={styles.navigationmenuRight}>
            <div className={styles.navigationmenuHome2} onClick={onCommuClick}>
              <img
                className={styles.iconMessages2}
                alt=""
                src="https://itimgstorage.blob.core.windows.net/source/-icon-messages-23.svg"
              />
              <div className={styles.community}>Community</div>
            </div>
            <div className={styles.navigationmenuHome3}>
              <img
                className={styles.searchIcon}
                alt=""
                src="https://itimgstorage.blob.core.windows.net/source/user3.svg"
              />
              <div className={styles.job}>Profile</div>
            </div>
          </div>
          <div className={styles.navigationmenuHome4} onClick={onNewsClick}>
            <div className={styles.homelinearWrapper}>
              <img
                className={styles.searchIcon}
                alt=""
                src="https://itimgstorage.blob.core.windows.net/source/homelinear1.svg"
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
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="https://itimgstorage.blob.core.windows.net/source/mask-group1@2x.png"
          />
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="https://itimgstorage.blob.core.windows.net/source/mask-group2@2x.png"
          />
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="https://itimgstorage.blob.core.windows.net/source/mask-group3@2x.png"
          />
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="https://itimgstorage.blob.core.windows.net/source/group-67@2x.png"
          />
        </div>
        <img
          className={styles.frameItem}
          alt=""
          src="https://itimgstorage.blob.core.windows.net/source/group-1.svg"
        />
        <img
          className={styles.frameInner}
          alt=""
          src="https://itimgstorage.blob.core.windows.net/source/group-2.svg"
        />
        <img
          className={styles.groupIcon}
          alt=""
          src="https://itimgstorage.blob.core.windows.net/source/group-6.svg"
        />
        <img
          className={styles.frameChild1}
          alt=""
          src="https://itimgstorage.blob.core.windows.net/source/group-3.svg"
        />
        <img
          className={styles.frameChild2}
          alt=""
          src="https://itimgstorage.blob.core.windows.net/source/group-11.svg"
        />
      </div>
    </div>
  );
};

export default Jobs;
