import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Search.module.css";
const Search = () => {
  const navigate = useNavigate();

  const onNavigationmenuHomeClick = useCallback(() => {
    navigate("/jobs");
  }, [navigate]);

  const onNavigationmenuHome2Click = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const onNavigationmenuHome3Click = useCallback(() => {
    navigate("/mypage");
  }, [navigate]);

  const onNavigationmenuHome4Click = useCallback(() => {
    navigate("/news");
  }, [navigate]);

  const onIconClick = useCallback(() => {
    navigate("/searchdetail");
  }, [navigate]);

  return (
    <div className={styles.search}>
      <div className={styles.homeBarmini}>
        <div className={styles.homeIndicator} />
      </div>
      <div className={styles.communityParent}>
        <b className={styles.community}>community</b>
        <img
          className={styles.iconMessageCircleOutline}
          alt=""
          src="/-icon-message-circle-outline.svg"
        />
      </div>
      <div className={styles.searchChild} />
      <div className={styles.homeBarmini}>
        <div className={styles.homeIndicator} />
      </div>
      <div className={styles.searchChild} />
      <div className={styles.searchInner} />
      <div className={styles.div}>회사, 사람, 키워드로 검색</div>
      <div className={styles.div1}>2023.07.07 오전 09:10 기준</div>
      <div className={styles.rankig}>
        <img className={styles.rankigChild} alt="" src="/line-11.svg" />
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
        <img className={styles.rankigItem} alt="" src="/line-12.svg" />
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
        <img className={styles.rankigInner} alt="" src="/line-11.svg" />
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
        <img className={styles.lineIcon} alt="" src="/line-12.svg" />
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
        <img className={styles.rankigChild1} alt="" src="/line-11.svg" />
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
        <img className={styles.rankigChild2} alt="" src="/line-12.svg" />
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
        <img className={styles.rankigChild3} alt="" src="/line-11.svg" />
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
        <img className={styles.rankigChild4} alt="" src="/line-12.svg" />
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
        <img className={styles.rankigChild5} alt="" src="/line-11.svg" />
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
        <img className={styles.rankigChild6} alt="" src="/line-12.svg" />
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
      <img className={styles.searchIcon} alt="" src="/search-icon.svg" />
      <b className={styles.b}>
        <p className={styles.p}>다른 사람들이</p>
        <p className={styles.p}>많이 검색하고 있어요!</p>
      </b>
      <div className={styles.menu1homelight}>
        <div className={styles.navigationmenuLeftParent}>
          <div className={styles.navigationmenuLeft}>
            <div
              className={styles.navigationmenuHome}
              onClick={onNavigationmenuHomeClick}
            >
              <img className={styles.groupIcon} alt="" src="/group.svg" />
              <div className={styles.job}>JOB</div>
            </div>
            <div className={styles.navigationmenuHome1}>
              <img
                className={styles.iconSearchNormal1}
                alt=""
                src="/-icon-search-normal-1.svg"
              />
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
                src="/-icon-messages-2.svg"
              />
              <div className={styles.community1}>Community</div>
            </div>
            <div
              className={styles.navigationmenuHome3}
              onClick={onNavigationmenuHome3Click}
            >
              <img className={styles.userIcon} alt="" src="/user.svg" />
              <div className={styles.job}>Profile</div>
            </div>
          </div>
          <div
            className={styles.navigationmenuHome4}
            onClick={onNavigationmenuHome4Click}
          >
            <div className={styles.homelinearWrapper}>
              <img className={styles.userIcon} alt="" src="/homelinear.svg" />
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.icon}
        alt=""
        src="/icon.svg"
        onClick={onIconClick}
      />
    </div>
  );
};

export default Search;
