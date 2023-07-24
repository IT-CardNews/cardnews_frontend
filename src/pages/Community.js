import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Community.module.css";
const Community = () => {
  const navigate = useNavigate();

  const onArticle1ContainerClick = useCallback(() => {
    navigate("/communitydetail");
  }, [navigate]);

  const onJobsClick = useCallback(() => {
    navigate("/jobs");
  }, [navigate]);

  const onSearchClick = useCallback(() => {
    navigate("/search");
  }, [navigate]);

  const onMyPageClick = useCallback(() => {
    navigate("/mypage");
  }, [navigate]);

  const onNewsClick = useCallback(() => {
    navigate("/news");
  }, [navigate]);

  return (
    <div className={styles.community}>
      <b className={styles.community1}>Community</b>
      <div className={styles.homeBarmini}>
        <div className={styles.homeIndicator} />
      </div>
      <div className={styles.div}>2023년 06월 27일 (화) 오전 8:15</div>
      <img className={styles.userActionIcon} alt="" src="https://sahayeon0717.blob.core.windows.net/media/user-action.svg" />
      <div className={styles.betweenBox} />
      <div className={styles.communityChild} />
      <div className={styles.article1} onClick={onArticle1ContainerClick}>
        <div className={styles.parent}>
          <img className={styles.icon} alt="" src="https://sahayeon0717.blob.core.windows.net/media/user_pic.png" />
          <div className={styles.div1}>김철진</div>
          <div className={styles.div2}>스타트업 개발자</div>
        </div>
        <div className={styles.forContainer}>
          <p className={styles.p}>
            다른 프로그래밍 언어를 쓰시다가 파이썬으로 넘어온 분들
          </p>
          <p className={styles.p}>
            이 `for` 루프 때문에 적지 않게 당황하시는 것을 자주 보게
          </p>
          <p className={styles.p}>됩니다.</p>
          <p className={styles.p}>&nbsp;</p>
          <p className={styles.p}>
            다른 언어에서는 일반적으로 `for` 루프를 작성 ... 더보기
          </p>
        </div>
        <b className={styles.rangeForIn}>파이썬의 range() 함수와 for-in 루프</b>
      </div>
      <div className={styles.userInfo}>
        <img className={styles.icon} alt="" src="https://sahayeon0717.blob.core.windows.net/media/user_pic.png" />
        <div className={styles.div1}>김철진</div>
        <div className={styles.div2}>스타트업 개발자</div>
      </div>
      <div className={styles.stackOverflow}>
        전 세계 개발자들의 질의응답 사이트인 Stack Overflow
      </div>
      <b className={styles.stackOverflow1}>Stack OverFlow 설문 조사 2023</b>
      <div className={styles.group}>
        <div className={styles.div5}>김기태</div>
        <div className={styles.div6}>스타트업 개발자</div>
      </div>
      <div className={styles.div7}>
        <p className={styles.p}>코딩 배울 때 피해야할 공부법과 해결책</p>
        <p className={styles.p}>&nbsp;</p>
        <p className={styles.p}>
          글을 읽고 핵심을 간략하게 정리해서 제 생 ... 더보기
        </p>
      </div>
      <div className={styles.div8}>2023년 06월 26일 (월) 오전 9:45</div>
      <img className={styles.userActionIcon1} alt="" src="https://sahayeon0717.blob.core.windows.net/media/user-action1.svg" />
      <b className={styles.b}>99%가 코딩 공부를 실패하는 이유</b>
      <img className={styles.profilepicIcon} alt="" src="https://sahayeon0717.blob.core.windows.net/media/profilepic@2x.png" />
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
              <img className={styles.iconBriefcase} alt="" src="https://sahayeon0717.blob.core.windows.net/media/search.svg" />
              <div className={styles.job}>Search</div>
            </div>
          </div>
          <div className={styles.navigationmenuRight}>
            <div className={styles.navigationmenuHome2}>
              <img
                className={styles.iconBriefcase}
                alt=""
                src="https://sahayeon0717.blob.core.windows.net/media/-icon-messages-21.svg"
              />
              <div className={styles.community2}>Community</div>
            </div>
            <div
              className={styles.navigationmenuHome3}
              onClick={onMyPageClick}
            >
              <img className={styles.iconBriefcase} alt="" src="https://sahayeon0717.blob.core.windows.net/media/user1.svg" />
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
    </div>
  );
};

export default Community;
