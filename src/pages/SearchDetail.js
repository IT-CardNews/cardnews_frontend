import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchDetail.module.css";
const SearchDetail = () => {
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
    <div className={styles.searchdetail}>
      <div className={styles.card}>
        <img className={styles.icon} alt="" src="https://sahayeon0717.blob.core.windows.net/media/001@2x.png" />
        <div className={styles.frameParent}>
          <div className={styles.gptWrapper}>
            <div className={styles.gpt}>
              한컴오피스에 한국판 챗 GPT가 들어간다
            </div>
          </div>
          <div className={styles.ai}>
            한컴, 네이버 클라우드 AI 동맹... 교육, 공공시장 강화
          </div>
        </div>
        <div className={styles.button} />
        <img className={styles.buttonIcon} alt="" src="https://sahayeon0717.blob.core.windows.net/media/button.svg" />
      </div>
      <div className={styles.card1}>
        <img className={styles.icon1} alt="" src="https://sahayeon0717.blob.core.windows.net/media/job_card.png" />
        <div className={styles.frameParent}>
          <div className={styles.gptWrapper}>
            <div className={styles.gpt}>엔지니어 채용 공고</div>
          </div>
          <div className={styles.ai}>
            프론트엔드 개발 환경 개선과 디자인 시스템 제작
          </div>
        </div>
        <img className={styles.buttonIcon1} alt="" src="https://sahayeon0717.blob.core.windows.net/media/button1.svg" />
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
                src="https://sahayeon0717.blob.core.windows.net/media/-icon-briefcase.svg"
              />
              <div className={styles.job}>JOB</div>
            </div>
            <div
              className={styles.navigationmenuHome1}
              onClick={onSearchClick}
            >
              <img
                className={styles.iconSearchNormal1}
                alt=""
                src="https://sahayeon0717.blob.core.windows.net/media/-icon-search-normal-1.svg"
              />
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
                src="https://sahayeon0717.blob.core.windows.net/media/-icon-messages-26.svg"
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
          <div
            className={styles.navigationmenuHome4}
            onClick={onNewsClick}
          >
            <div className={styles.homelinearWrapper}>
              <img
                className={styles.iconBriefcase}
                alt=""
                src="https://sahayeon0717.blob.core.windows.net/media/homelinear1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.homeBarmini} />
      <div className={styles.homeIndicator} />
      <div className={styles.searchdetailChild} />
      <div className={styles.searchdetailChild} />
      <div className={styles.searchdetailInner} />
      <div className={styles.div2}>회사, 사람, 키워드로 검색</div>
      <img className={styles.icon2} alt="" src="https://sahayeon0717.blob.core.windows.net/media/icon.svg" />
      <img className={styles.searchIcon} alt="" src="https://sahayeon0717.blob.core.windows.net/media/search-icon.svg" />
    </div>
  );
};

export default SearchDetail;
