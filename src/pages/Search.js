import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Search.module.css";
const Search = () => {
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

  const onNewsClick = useCallback(() => {
    navigate("/news");
  }, [navigate]);

  const onIconClick = useCallback(() => {
    navigate("/searchdetail");
  }, [navigate]);

const now = new Date();

// 한국 시간 변환
const koreaTime = new Date(now.getTime() + (-540 - now.getTimezoneOffset()) * 60000);

const getSearch = async () => {
  try {
    const response = await axios.get(
      "https://eatit-backend.azurewebsites.net/test/job_search" ,"프론트"
    );
    console.log("서치 가져오기 성공: ", response);
  } catch (error) {
    console.error("서치 가져오기 에러 발생: ", error);
    if (error.response) {
      // 서버가 오류응답을 반환한 경우
      console.error("서치 가져오기 서버 응답: ", error.response.data);
    }
  }
};

getSearch();

  return (
    <div className={styles.search}>
      <div className={styles.homeBarmini}>
        <div className={styles.homeIndicator} />
      </div>
      <div className={styles.communityParent}>
        <b className={styles.community}>community</b>

      </div>
      <div className={styles.searchChild} />
      <div className={styles.homeBarmini}>
        <div className={styles.homeIndicator} />
      </div>
      <div className={styles.searchChild} />
      <div className={styles.searchInner} />
     <div className={styles.div}>
     <input 
      style={{ fontSize: "11px", marginLeft: "5px",paddingLeft: "15px",border: 0, borderRadius: "15px", width:"50vw", height:"20px", outline: "none", backgroundColor: "rgb(233, 233, 233)"}}
      type="text" 
      placeholder="회사, 사람, 키워드로 검색" 
    />
     </div>
      <div className={styles.div1}>{koreaTime.toLocaleString()}</div>
      <div className={styles.rankig}>
        <div className={styles.react}>
          <span className={styles.span}>
            <b>1</b>
          </span>
          <span className={styles.reactNextJs}>
            <span className={styles.span}>
              <span className={styles.span2}>{` `}</span>
            </span>
            <span>react</span>
          </span>
        </div>
        <div className={styles.nodejs}>
          <span className={styles.span}>
            <b>6</b>
          </span>
          <span className={styles.nodejs1}>
            <span className={styles.span}>
              <span className={styles.span2}>{` `}</span>
            </span>
            <span>node.js</span>
          </span>
        </div>
        <div className={styles.reactNextJsContainer}>
          <span className={styles.span}>
            <b>2</b>
          </span>
          <span className={styles.reactNextJs}>
            <span className={styles.span}>
              <span className={styles.span2}>{` `}</span>
            </span>
            <span>react next. js</span>
          </span>
        </div>
        <div className={styles.div2}>
          <span className={styles.span}>
            <b>7</b>
          </span>
          <span className={styles.nodejs1}>
            <span className={styles.span}>
              <span className={styles.span2}>{` `}</span>
            </span>
            <span>프론트엔드</span>
          </span>
        </div>
        <div className={styles.spring}>
          <span className={styles.span}>
            <b>3</b>
          </span>
          <span className={styles.reactNextJs}>
            <span className={styles.span}>
              <span className={styles.span2}>{` `}</span>
            </span>
            <span>spring</span>
          </span>
        </div>
        <div className={styles.chatGpt}>
          <span className={styles.span}>
            <b>8</b>
          </span>
          <span className={styles.nodejs1}>
            <span className={styles.span}>
              <span className={styles.span2}>{` `}</span>
            </span>
            <span>chat GPT</span>
          </span>
        </div>
        <div className={styles.div3}>
          <span className={styles.span}>
            <b>4</b>
          </span>
          <span className={styles.nodejs1}>
            <span className={styles.span}>
              <span className={styles.span2}>{` `}</span>
            </span>
            <span>개발자 취업 공고</span>
          </span>
        </div>
        <div className={styles.ai}>
          <span className={styles.span}>
            <b>9</b>
          </span>
          <span className={styles.nodejs1}>
            <span className={styles.span}>
              <span className={styles.span2}>{` `}</span>
            </span>
            <span>AI</span>
          </span>
        </div>
        <div className={styles.div4}>
          <span className={styles.span}>
            <b>5</b>
          </span>
          <span className={styles.nodejs1}>
            <span className={styles.span}>
              <span className={styles.span2}>{` `}</span>
            </span>
            <span>부트캠프</span>
          </span>
        </div>
        <div className={styles.div5}>
          <span className={styles.span}>
            <b>10</b>
          </span>
          <span className={styles.nodejs1}>
            <span className={styles.span}>
              <span className={styles.span2}>{` `}</span>
            </span>
            <span>카드뉴스</span>
          </span>
        </div>
      </div>

      <img className={styles.searchIcon} src="https://itimgstorage.blob.core.windows.net/source/search-icon.svg" />
      <b className={styles.b}>
        <p className={styles.p}>다른 사람들이</p>
        <p className={styles.p}>많이 검색하고 있어요!</p>
      </b>

      {/* -------------하단바------------ */}

      <div className={styles.menu1homelight}>
        <div className={styles.navigationmenuLeftParent}>
          <div className={styles.navigationmenuLeft}>
            <div
              className={styles.navigationmenuHome}
              onClick={onJobsClick}
            >
              <img className={styles.groupIcon} alt="" src="https://itimgstorage.blob.core.windows.net/source/group.svg" />
              <div className={styles.job}>JOB</div>
            </div>
            <div className={styles.navigationmenuHome1}>
              <img
                className={styles.iconSearchNormal1}
                alt=""
                src="https://itimgstorage.blob.core.windows.net/source/-icon-search-normal-1.svg"
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
                src="https://itimgstorage.blob.core.windows.net/source/-icon-messages-2.svg"
              />
              <div className={styles.community1}>Community</div>
            </div>
            <div
              className={styles.navigationmenuHome3}
              onClick={onMyPageClick}
            >
              <img className={styles.userIcon} alt="" src="https://itimgstorage.blob.core.windows.net/source/user.svg" />
              <div className={styles.job}>Profile</div>
            </div>
          </div>
          <div
            className={styles.navigationmenuHome4}
            onClick={onNewsClick}
          >
            <div className={styles.homelinearWrapper}>
              <img className={styles.userIcon} alt="" src="https://itimgstorage.blob.core.windows.net/source/homelinear.svg" />
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.icon}
        alt=""
        src="https://itimgstorage.blob.core.windows.net/source/icon.svg"
        onClick={onIconClick}
      />
    </div>
  );
};

export default Search;
