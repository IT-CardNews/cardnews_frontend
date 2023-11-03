import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./News.module.css";
import axios from "axios";
import summarizeText from "../img/summarizeText";
import React from "react";
import { Oval } from "react-loader-spinner";
const News = () => {
  const navigate = useNavigate();
  const [newsinfo, setNewsinfo] = useState([]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/newsdetail");
  }, [navigate]);

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

  //new api 가져오기
  const getNews = async () => {
    try {
      const response = await axios.get(
        "https://eatit-backend.azurewebsites.net/test/cardnews_info"
      );
      console.log("뉴스 가져오기 성공: ", response);
    } catch (error) {
      console.error("뉴스 가져오기 에러 발생: ", error);
      if (error.response) {
        // 서버가 오류응답을 반환한 경우
        console.error("뉴스 가져오기 서버 응답: ", error.response.data);
      }
    }
  };
  const newsText = [
    `The camera never lies. Except, of course, it does - and seemingly more often with each passing day.
  In the age of the smartphone, digital edits on the fly to improve photos have become commonplace, from boosting colours to tweaking light levels.
  Now, a new breed of smartphone tools powered by artificial intelligence (AI) are adding to the debate about what it means to photograph reality.
  Google's latest smartphones released last week, the Pixel 8 and Pixel 8 Pro, go a step further than devices from other companies. They are using AI to help alter people's expressions in photographs.
  It's an experience we've all had: one person in a group shot looks away from the camera or fails to smile. Google's phones can now look through your photos to mix and match from past expressions, using machine learning to put a smile from a different photo of them into the picture. Google calls it Best Take.`,
    `현대자동차는 오는 21일까지 3주간 채용 홈페이지를 통해 IT부문 인재를 집중 채용한다고 1일 밝혔다.
채용 부문은 총 27개로 ▲IT 관리 ▲프론트엔드 및 백엔드 개발자 ▲모바일 App 개발 ▲SW 아키텍트 ▲데이터·인프라·보안 엔지니어 등이며 분야별 자격 요건과 수행 직뮤 등 세부사항은 채용 홈페이지에서 확인할 수 있다.
현대차는 소프트웨어 중심 자동차(SDV) 체제로의 전환 가속화를 위해 역량 있는 IT 인재를 적극 모집해 자체적인 IT 개발 역량 강화를 도모하고 있다.
또 모바일 및 커머스 빅데이터 플랫폼을 비롯해 고객 관리 채널 등 다양한 영역에서 IT 서비스 직접 개발에도 적극적이다. 차량 생애주기 전반에 걸쳐 생성되는 방대한 데이터를 활용해 고객에게 혁신적인 차량 경험과 서비스를 제공하기 위해서다.
아울러 IT 인재들이 주도적으로 일하며 성과를 낼 수 있는 조직문화도 갖추고 있다.
수평적이고 유연한 업무 환경에서 협업할 수 있도록 거점 오피스 및 선택적 근로 시간제도 운영 중이다.
현대차 관계자는 "전세계 수천만대의 차량이 생성하는 거대한 데이터를 활용해 글로벌 IT 서비스를 직접 설계하고 개발하는 경험은 개발자의 성장과 경력에 많은 도움이 될 것이라 확신한다"며 "이번 집중 채용 기간은 평소 현대차 채용에 관심있던 우수 인재들에게 좋은 기회가 될 것"이라고 밝혔다.`,
    ,
    `
이달  9~11일 미국 버지니아주 메리어트 버지니아 비치 오션 프런트 호텔에서  NAViGATE 2023 행사가 열렸다. IBM이 매년마다 개최하는 가을 컨퍼런스다.
올해에는 새로운 소프트웨어 및 기술 발표가 이뤄졌다. IBM의 하드웨어 플랫폼인 POWER Systems 상에서 실행되는 운영체제인 IBMi 와 관련된 주제였다. 100개 이상의 세션 발표와 선도적 솔루션 제공기업들의 엑스포도 같이 진행됐다.
논의된 주제들은 프로그래밍(Fundamentals, General, PHP, Python, RPG), 보안, 시스템 관리, 가상화(Virtualization)를 비롯해 비즈니스 스킬 개발, 정보기술(IT) 전략, 네트워킹, 프로그램 테스트 등 IT 산업의 ABC인 인공지능, 빅데이터, 사이버보안으로 요약해 볼 수 있다. 필자는 오픈 인공지능(AI), 보안, 파이썬, IT 전략 세션에 중점적으로 참석했다. 
컨퍼런스의 소감을 한국  독자에게도 소개하고 싶었다.
우선 미국의 IT 기업들은 오래 축적돼 온 기술들을 기반으로 체계적인 발전을 추구한다. 오래된 기술이나 소프트웨어, 시스템( legacy system)을 그냥 버리지 않고 새로운 기술과 시스템과 공존하고 융합하면서 점진적인 발전을 이뤄간다는 말이다. .
또 한 가지 인상적인 것은 미국 대기업들이 중소기업과 협업하는 과정이었다.  IBM은 중소기업과 협력하면서 기술생태계를 구축하고 기술 발전을 모색한다. IT산업계와 학계가 연계해 지속적인 인력 공급을 위해 협력하고 선진 기술 개발에 공동으로 참여하며 서로의 발전을 지속적으로 추진해 나간다. 
또 User Conference 같은 행사를 통해  최신 IT 기술과 정보를 중소기업 및 사회와 나눈다.  급속히 발전하는 인공지능 기술을 IT 소프트웨어와 하드웨어 설계 개발 및 검증, 관리 등에 적용하려는 노력이다.  IBM은 이 활동이  기업 홍보에 도움이 된다는 사실도 잘 알고 있다. 
NAViGATE 2023 행사는 IBM Technology User Community인 COMMON이 주도하는데 필자도 COMMON의 초청을 받아 제자와 같이 참석했다.  코로나19 팬데믹 영향으로 실로 오랜만에 IT 산업계 종사자들과 직접 만나 대화하고 새로운 기술을 배우는 시간이었다.
학교에서 가르치고 학생들이 배우는 내용을 개선하기 위해 어떤 방향으로 나아가야 할지가 IT 산업계의 화두 가운데 하나라는 것을 알 수 있었다. 
기술 발전 속도가 너무 빨라진 만큼 다양한 IT 분야에서 대기업과 중소기업이 긴밀히 협업하고 학교에서 무얼 가르칠지 방향을 찾아나가는 등의 고민과  시도가 많아져야 할 것 같다. 
`,
  ];

  // Assuming newsText is an array with values.
const randomIndex = Math.floor(Math.random() * newsText.length); // Generates a random index
const randomValue = newsText[randomIndex]; // Gets the value at the random index

// Now you can use `randomValue` in your component or anywhere else you need it.

  // news.js
  async function fetchSummary() {
    try {
      const aiSummary = await summarizeText(randomValue);
      if (aiSummary) {
        console.log("결과: ", aiSummary);
        setNewsinfo(aiSummary); // 상태 업데이트
      } else {
        console.log("요약 실패");
      }
    } catch (error) {
      console.error(error);
    }
  }

  // 컴포넌트가 마운트되었을 때 fetchSummary를 호출
  useEffect(() => {
    fetchSummary();
  }, []); // 빈 의존성 배열은 컴포넌트가 마운트될 때 한 번만 함수를 호출하게 합니다.

  return (
    <div className={styles.news}>
      <b className={styles.comment}>화면을 옆으로 넘겨주세요.</b>
      <b className={styles.b}>
        <p className={styles.p}>
          <span className={styles.span}>{`${localStorage.getItem(
            "nickname"
          )}`}</span>{" "}
          님을 위한
        </p>
        <p className={styles.p}>오늘의 추천 뉴스</p>
      </b>
      {/* ----------------------------------------------------------------------- */}
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
                src="https://itimgstorage.blob.core.windows.net/source/-icon-messages-25.svg"
              />
              <div className={styles.community}>Community</div>
            </div>
            <div className={styles.navigationmenuHome3} onClick={onMyPageClick}>
              <img
                className={styles.iconBriefcase}
                alt=""
                src="https://itimgstorage.blob.core.windows.net/source/user5.svg"
              />
              <div className={styles.job}>Profile</div>
            </div>
          </div>
          <div className={styles.navigationmenuHome4}>
            <div className={styles.homeWrapper}>
              <img
                className={styles.iconBriefcase}
                alt=""
                src="https://itimgstorage.blob.core.windows.net/source/home1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* //----------------------------------------------------------- */}
      <div className={styles.cardnewsParent}>
        <div className={styles.cardnews}>
          {newsinfo ? (
            newsinfo.map((item, index) => {
              // 짝수 인덱스는 이미지 URL, 홀수 인덱스는 제목을 나타냅니다.
              if (index % 2 === 0) {
                // 이미지를 렌더링합니다.
                return (
                  <React.Fragment key={item}>
                    <img className={styles.image9Icon} alt="" src={item} />
                    <div
                      className={`${styles.article} ${
                        index === 1 ? styles.boldText : ""
                      }`}>
                      {newsinfo[index + 1]}
                    </div>
                  </React.Fragment>
                );
              }
              return null; // 홀수 인덱스에서는 null을 반환하여 무시합니다.
            })
          ) : (
            <Oval color="#ff0000" height={100} width={100} />
          )}
        </div>
      </div>
    </div>
  );
};

export default News;
