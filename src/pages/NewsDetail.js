import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NewsDetail.module.css";
const NewsDetail = () => {
  const navigate = useNavigate();

  const onJobsClick = useCallback(() => {
    navigate("/jobs");
  }, [navigate]);

  const onCommuClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const onMyPageClick = useCallback(() => {
    navigate("/mypage");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/news");
  }, [navigate]);

  return (
    <div className={styles.newsdetail}>
      <div className={styles.newsdetailChild} />
      <b className={styles.b}>
        <p className={styles.p}>
          <span className={styles.span}>{`${localStorage.getItem(
          "nickname"
        )}`}</span> 님을 위한</p>
        <p className={styles.p}>오늘의 추천 뉴스</p>
      </b>
      <img className={styles.image9Icon} alt="" src="https://itimgstorage.blob.core.windows.net/source/image-9@2x.png" />
      
      <div className={styles.ai}>
        '초거대 인공지능(AI)'이 정보통신업계 가장 뜨거운 키워드로 떠오르면서
        기업 간 경쟁이 본격화하고 있다. 구글과 마이크로소프트 등 글로벌 빅테크
        기업들은 물론이고, 국내 기업들도 관련 사업 진출에 속도를 내고 있다. 특히
        네이버, 카카오 등 국내 굴지의 IT 기업과 SKT·KT·LG 등 정보통신기업 모두
        '초거대 AI' 기술개발에 적극 나서고 있어 눈길이 쏠린다.
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
                src="https://itimgstorage.blob.core.windows.net/source/-icon-briefcase2.svg"
              />
              <div className={styles.job}>JOB</div>
            </div>
            <div className={styles.navigationmenuHome1}>
              <img className={styles.iconBriefcase} alt="" src="https://itimgstorage.blob.core.windows.net/source/search.svg" />
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
                src="https://itimgstorage.blob.core.windows.net/source/-icon-messages-24.svg"
              />
              <div className={styles.community}>Community</div>
            </div>
            <div
              className={styles.navigationmenuHome3}
              onClick={onMyPageClick}
            >
              <img className={styles.iconBriefcase} alt="" src="https://itimgstorage.blob.core.windows.net/source/user4.svg" />
              <div className={styles.job}>Profile</div>
            </div>
          </div>
          <div className={styles.navigationmenuHome4}>
            <div className={styles.homeWrapper} onClick={onFrameContainerClick}>
              <img className={styles.iconBriefcase} alt="" src="https://itimgstorage.blob.core.windows.net/source/home.svg" />
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

export default NewsDetail;
