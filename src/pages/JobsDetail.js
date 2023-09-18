import React, { useEffect } from "react";
import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./JobsDetail.module.css";
import axios from "axios";

const JobsDetail = () => {
  const location = useLocation();


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

  const updateUser = async () => {
    try {
      const data = {
        id: 1234, // 사용자 ID
        nickname: "new_nickname", // 변경할 닉네임
        profile: "new_profile", // 변경할 프로필 정보
        thumbnail: "new_thumbnail", // 새로운 썸네일 URL
      };

      const response = await axios.post(
        "https://eatit-backend.azurewebsites.net/test/update_userinfo",
        data
      );

      console.log("유저정보 업데이트: ", response.data);
    } catch (error) {
      console.error("유저정보 에러: ", error);
    }
  };

  const getNews = async () => {
    try {
      const data = {
        id: 1234, // 사용자 ID
        nickname: "new_nickname", // 변경할 닉네임
        profile: "new_profile", // 변경할 프로필 정보
        thumbnail: "new_thumbnail", // 새로운 썸네일 URL
      };

      const response = await axios.get(
        "https://eatit-backend.azurewebsites.net/test/cardnews_info"
      );

      console.log("카드 뉴스 가져오기: ", response);
    } catch (error) {
      console.error("카드 뉴스 에러: ", error);
    }
  };




  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className={styles.jobsdetail}>
      <b className={styles.b}>
        <p className={styles.p}>{`${localStorage.getItem(
          "nickname"
        )}님을 위한 취업 공고`}</p>
      </b>

      <div className={styles.menu1homelight}>
        <div className={styles.navigationmenuLeftParent}>
          <div className={styles.navigationmenuLeft}>
            <div className={styles.navigationmenuHome} onClick={onJobsClick}>
              <img
                className={styles.iconBriefcase}
                alt=""
                src="https://itimgstorage.blob.core.windows.net/source/-icon-briefcase1.svg-icon-briefcase1.svg"
              />
              <div className={styles.job}>{` `}</div>
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
                src="https://itimgstorage.blob.core.windows.net/source/-icon-messages-22.svg"
              />
              <div className={styles.community}>Community</div>
            </div>
            <div className={styles.navigationmenuHome3} onClick={onMyPageClick}>
              <img
                className={styles.searchIcon}
                alt=""
                src="https://itimgstorage.blob.core.windows.net/source/user2.svg"
              />
              <div className={styles.job}>Profile</div>
            </div>
          </div>
          <div className={styles.navigationmenuHome4} onClick={onNewsClick}>
            <div className={styles.homelinearWrapper}>
              <img
                className={styles.searchIcon}
                alt=""
                src="https://itimgstorage.blob.core.windows.net/source/homelinear2.svg"
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
