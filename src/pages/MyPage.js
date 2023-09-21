import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MyPage.module.css";
import axios from 'axios';

const MyPage = () => {
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

  const onNewsClick = useCallback(() => {
    navigate("/news");
  }, [navigate]);

  const onUserInfo = useCallback(() => {
    navigate("/userinfo");
  }, [navigate]);

  const updateUser = async () => {
    const payload = {
      id: 3026164526,
      nickname: "앵앵",
      profile: "",
      thumbnail: ""
    };

    try {
      const response = await axios.post(
        "https://eatit-backend.azurewebsites.net/test/update_userinfo",
        payload
      );
      //글쓰기 id는 때는 API에서 ID 전체를 가져오고 마지막 ID + 1 하기
      console.log("수정하기 성공: ", response);
    } catch (error) {
      console.error("유저 수정 에러 발생: ", error);
      if (error.response) {
        // 서버가 오류응답을 반환한 경우
        console.error("유저 수정 서버 응답: ", error.response.data);
      }
    }
  };

  useEffect(()=> {
    updateUser();

    
  })
  return (
    <div className={styles.mypage}>
      <b className={styles.myPage}>My Page</b>
      <div className={styles.iconSettingsOutlineParent} onClick={onUserInfo}>
        <img
          className={styles.iconSettingsOutline}
          alt=""
          src="https://itimgstorage.blob.core.windows.net/source/-icon-settings-outline.svg"
        />
        <div className={styles.div}>회원 정보 관리</div>
      </div>
      <div className={styles.iconBookmarkOutlineParent}>
        <img
          className={styles.iconBookmarkOutline}
          alt=""
          src="https://itimgstorage.blob.core.windows.net/source/-icon-bookmark-outline.svg"
        />
        <div className={styles.div}>북마크</div>
      </div>
      <div className={styles.frame}>
        <div className={styles.header}>
          <div className={styles.header1}>
            <img
              className={styles.avatarsIcon}
              alt=""
              src="https://itimgstorage.blob.core.windows.net/source/avatars.svg"
            />
            <div className={styles.text} />
          </div>
          <div className={styles.div2}>{localStorage.getItem("nickname")}</div>
        </div>
      </div>
      <div className={styles.menu1homelight}>
        <div className={styles.navigationmenuLeftParent}>
          <div className={styles.navigationmenuLeft}>
            <div className={styles.navigationmenuHome} onClick={onJobsClick}>
              <img
                className={styles.iconBriefcase}
                alt=""
                src="https://itimgstorage.blob.core.windows.net/source/-icon-briefcase.svg"
              />
              <div className={styles.job}>JOB</div>
            </div>
            <div className={styles.navigationmenuHome1} onClick={onSearchClick}>
              <img
                className={styles.iconBriefcase}
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
                src="https://itimgstorage.blob.core.windows.net/source/-icon-user.svg"
              />
              <div className={styles.community}>Community</div>
            </div>
            <div className={styles.navigationmenuHome3}>
              <img
                className={styles.iconUser}
                alt=""
                src="https://itimgstorage.blob.core.windows.net/source/-icon-user.svg"
              />
              <div className={styles.job}>Profile</div>
            </div>
          </div>
          <div className={styles.navigationmenuHome4} onClick={onNewsClick}>
            <div className={styles.homelinearWrapper}>
              <img
                className={styles.iconBriefcase}
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
      <div className={styles.groupParent}>
        <div className={styles.groupWrapper}>
          <div className={styles.groupWrapper}>
            <b className={styles.aboutEatit}>ABOUT EATIT</b>
          </div>
        </div>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.groupContainer}>
        <div className={styles.parent}>
          <div className={styles.div3}>이용약관</div>
          <img
            className={styles.vuesaxoutlinearrowRightIcon}
            alt=""
            src="https://itimgstorage.blob.core.windows.net/source/vuesaxoutlinearrowright.svg"
          />
        </div>
        <img
          className={styles.vuesaxoutlinedirectInboxIcon}
          alt=""
          src="https://itimgstorage.blob.core.windows.net/source/vuesaxoutlinedirectinbox.svg"
        />
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.group}>
          <div className={styles.div3}>버전 정보</div>
          <img
            className={styles.vuesaxoutlinearrowRightIcon}
            alt=""
            src="https://itimgstorage.blob.core.windows.net/source/vuesaxoutlinearrowright.svg"
          />
        </div>
        <img
          className={styles.vuesaxoutlinedirectInboxIcon}
          alt=""
          src="https://itimgstorage.blob.core.windows.net/source/vuesaxoutlineticketdiscount.svg"
        />
      </div>
      <div className={styles.groupParent1}>
        <div className={styles.group}>
          <div className={styles.div3}>문의 및 지원</div>
          <img
            className={styles.vuesaxoutlinearrowRightIcon}
            alt=""
            src="https://itimgstorage.blob.core.windows.net/source/vuesaxoutlinearrowright.svg"
          />
        </div>
        <img
          className={styles.vuesaxoutlinedirectInboxIcon}
          alt=""
          src="https://itimgstorage.blob.core.windows.net/source/vuesaxoutlinelovely.svg"
        />
      </div>
      <div className={styles.groupParent2}>
        <div className={styles.parent}>
          <div className={styles.div3}>개인정보 처리 방침</div>
          <img
            className={styles.vuesaxoutlinearrowRightIcon}
            alt=""
            src="https://itimgstorage.blob.core.windows.net/source/vuesaxoutlinearrowright.svg"
          />
        </div>
        <img
          className={styles.vuesaxoutlinedirectInboxIcon}
          alt=""
          src="https://itimgstorage.blob.core.windows.net/source/vuesaxoutlinedocumentprevious.svg"
        />
      </div>
      <div className={styles.mypageChild} />
    </div>
  );
};

export default MyPage;
