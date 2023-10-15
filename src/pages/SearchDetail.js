import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchDetail.module.css";
import st from "./Search.module.css";


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
       <div className={st.div}>
     <input 
      style={{ fontSize: "11px", marginLeft: "5px",paddingLeft: "15px",border: 0, borderRadius: "15px", width:"50vw", height:"20px", outline: "none", backgroundColor: "rgb(233, 233, 233)"}}
      type="text" 
      placeholder="회사, 사람, 키워드로 검색" 
    />
    </div>
      <div className={styles.card}>
        <img
          className={styles.icon}
          alt=""
          src="https://itimgstorage.blob.core.windows.net/source/001@2x.png"
        />
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


     
        <div className={styles.frameParent}>
          <div className={styles.gptWrapper}>
            <div className={styles.gpt}>
            뉴스로 지식 쌓는 챗GPT…‘공짜’ 기사 제값 받기 이뤄질까
            </div>
          </div>
          <div className={styles.ai}>
          언론사가 지금까지 이뤄놓은 많은 작업의 결과물을 챗GPT(지피티)가 마음껏 빨아들이도록 방치하는 것은 끔찍한 실수가 될 것이다
          </div>
        </div>

        <div className={styles.frameParent}>
          <div className={styles.gptWrapper}>
            <div className={styles.gpt}>
            챗GPT 공개 반년...세상은 이렇게 바뀌었다
            </div>
          </div>
          <div className={styles.ai}>
          미국의 인공지능(AI) 스타트업 오픈AI가 생성형 AI 챗봇 '챗GPT'를 세상에 내놓은 지 30일로 반년을 맞이했다.

마치 사람과 이야기하듯 자연스럽게 질문을 주고받으며 대화하는 챗GPT의 뛰어난 기능에 세상은 놀라움을 금치 못했다. 그야말로 기술 혁명이라고 부를만한 사건으로 평가받으며, 업계의 생성형 AI 개발 경쟁에 불이 붙었다. 챗GPT는 이전에 본 적 없는 속도로 사회를 변화시키고 있다.
          </div>
        </div>
        </div>

        

    

           {/* -------------하단바------------ */}

           <div className={st.menu1homelight}>
        <div className={st.navigationmenuLeftParent}>
          <div className={st.navigationmenuLeft}>
            <div
              className={st.navigationmenuHome}
              onClick={onJobsClick}
            >
              <img className={st.groupIcon} alt="" src="https://itimgstorage.blob.core.windows.net/source/group.svg" />
              <div className={st.job}>JOB</div>
            </div>
            <div className={st.navigationmenuHome1}>
              <img
                className={st.iconSearchNormal1}
                alt=""
                src="https://itimgstorage.blob.core.windows.net/source/-icon-search-normal-1.svg"
              />
              <div className={st.job}>Search</div>
            </div>
          </div>
          <div className={st.navigationmenuRight}>
            <div
              className={st.navigationmenuHome2}
              onClick={onCommuClick}
            >
              <img
                className={st.iconMessages2}
                alt=""
                src="https://itimgstorage.blob.core.windows.net/source/-icon-messages-2.svg"
              />
              <div className={st.community1}>Community</div>
            </div>
            <div
              className={st.navigationmenuHome3}
              onClick={onMyPageClick}
            >
              <img className={st.userIcon} alt="" src="https://itimgstorage.blob.core.windows.net/source/user.svg" />
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
      <div className={styles.homeIndicator} />
      <div className={styles.searchdetailChild} />
      <div className={styles.searchdetailChild} />
      <div className={styles.searchdetailInner} />
      <img
        className={styles.icon2}
        alt=""
        src="https://itimgstorage.blob.core.windows.net/source/icon.svg"
      />
      <img
        className={styles.searchIcon}
        alt=""
        src="https://itimgstorage.blob.core.windows.net/source/search-icon.svg"
      />
    </div>
  );
};

export default SearchDetail;
