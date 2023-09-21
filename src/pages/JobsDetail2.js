import React, { useEffect } from "react";
import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Jobs.module.css";
import axios from "axios";

const JobsDetail2 = () => {
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

let imgUrl = "";
let jobField = "";

  const getCardNews = async (id) => {
    try {
      const response = await axios.get(
        `https://eatit-backend.azurewebsites.net/test/job_info/${id}`
      );
      console.log("카드뉴스 디테일 가져오기 성공: ", response);
      imgUrl = response.data.jobImage;
      jobField = response.data.jobField;
      let jobAdd = response.data.jobAdd;
    } catch (error) {
      console.error("카드뉴스 정보 가져오기 에러 발생: ", error);
    }
  };

  useEffect(() => {
    // getCardNews();
  }, []);

  return (
    <div className={styles.jobsdetail}>
      <b className={styles.b}>
        <p className={styles.p}>{`${localStorage.getItem(
          "nickname"
        )}님을 위한 취업 공고`}</p>
      </b>
      <div>
      <img
            className={styles.maskGroupIcon}
            alt=""
            src="https://itimgstorage.blob.core.windows.net/source/jobCard1.png"
          />
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="https://itimgstorage.blob.core.windows.net/source/jobCard2.png"
          />
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="https://itimgstorage.blob.core.windows.net/source/jobCard3.png"
          />
        </div>

      {/* --------------------하단바-------------------- */}
      <div className={styles.menu1homelight}>
        <div className={styles.navigationmenuLeftParent}>
          <div className={styles.navigationmenuLeft}>
            <div className={styles.navigationmenuHome}>
              <img
                className={styles.iconBriefcase}
                alt=""
                src="https://itimgstorage.blob.core.windows.net/source/-icon-briefcase1.svg"
              />
              <div className={styles.job} onClick={onJobsClick}>JOB</div>
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
      </div>
      )
    }
export default JobsDetail2;
