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
    `The camera never lies. Except, of course, it does - and seemingly more often with each passing day. In the age of the smartphone, digital edits on the fly to improve photos have become commonplace, from boosting colours to tweaking light levels. Now, a new breed of smartphone tools powered by artificial intelligence (AI) are adding to the debate about what it means to photograph reality.
  Google's latest smartphones released last week, the Pixel 8 and Pixel 8 Pro, go a step further than devices from other companies. They are using AI to help alter people's expressions in photographs.
  It's an experience we've all had: one person in a group shot looks away from the camera or fails to smile. Google's phones can now look through your photos to mix and match from past expressions, 
  using machine learning to put a smile from a different photo of them into the picture. Google calls it Best Take.` ,
`현대자동차는 오는 21일까지 3주간 채용 홈페이지를 통해 IT부문 인재를 집중 채용한다고 1일 밝혔다.
채용 부문은 총 27개로 ▲IT 관리 ▲프론트엔드 및 백엔드 개발자 ▲모바일 App 개발 ▲SW 아키텍트 ▲데이터·인프라·보안 엔지니어 등이며 분야별 자격 요건과 수행 직뮤 등 세부사항은 채용 홈페이지에서 확인할 수 있다.
현대차는 소프트웨어 중심 자동차 체제로의 전환 가속화를 위해 역량 있는 IT 인재를 적극 모집해 자체적인 IT 개발 역량 강화를 도모하고 있다.
또 모바일 및 커머스 빅데이터 플랫폼을 비롯해 고객 관리 채널 등 다양한 영역에서 IT 서비스 직접 개발에도 적극적이다. 차량 생애주기 전반에 걸쳐 생성되는 방대한 데이터를 활용해 고객에게 혁신적인 차량 경험과 서비스를 제공하기 위해서다.
아울러 IT 인재들이 주도적으로 일하며 성과를 낼 수 있는 조직문화도 갖추고 있다.
수평적이고 유연한 업무 환경에서 협업할 수 있도록 거점 오피스 및 선택적 근로 시간제도 운영 중이다.
현대차 관계자는 "전세계 수천만대의 차량이 생성하는 거대한 데이터를 활용해 글로벌 IT 서비스를 직접 설계하고 개발하는 경험은 개발자의 성장과 경력에 많은 도움이 될 것이라 확신한다"며 "이번 집중 채용 기간은 평소 현대차 채용에 관심있던 우수 인재들에게 좋은 기회가 될 것"이라고 밝혔다.`,
,
 `삼성전자가 내년 선보일 제품에 인공지능(AI)을 선제적으로 도입할 전망이다.
삼성전자는 내년 초 출시하는 주력 스마트폰 갤럭시 S24 시리즈를 세계 최초 'AI 스마트폰'으로 규정하고, 단말기 안에서 자체적으로 정보를 수집하고 연산할 수 있는 '온디바이스 AI' 개발에 박차를 가하고 있다.
온디바이스 AI는 기기가 수집한 정보를 클라우드로 전송하지 않아도 되기 때문에 처리 속도가 빠르고, 인터넷 연결이 어려운 상황에서도 실시간 작업이 가능하다.
중앙 서버를 통하지 않으므로 보안에서도 클라우드 기반 인공지능 대비 우위를 가진다.
삼성전자가 지난달 초 공개한 차세대 모바일 프로세서 '엑시노스 2400'의 경우 전작 대비 중앙처리장치(CPU) 성능이 1.7배, 인공지능 성능이 14.7배 개선됐다.
인텔의 차세대 프로세서 '메테오 레이크' 또는 퀄컴의 새 퍼스널 컴퓨터(PC) 칩인 '스냅드래곤 X 엘리트'를 시스템온칩(SoC)으로 탑재할 것으로 예상된다.
지난달 31일 실적 발표 콘퍼런스콜에서 "향후에도 스마트폰은 AI의 가장 중요한 액세스 포인트일 것"이라며 "온디바이스와 서버 기반 AI 등 하이브리드 AI를 제공할 것"이라고 말했다.
 "고객들이 사용하는 핵심 기능에 인공지능을 적용하고, 사용자 패턴과 선호도를 기반으로 최적화해 더 의미 있고 혁신적인 경험을 내년부터 제공하겠다"고 강조했다.`,
    
 `현대오토에버가 1일 ‘AUTOSAR Day With mobilgene 2023’를 개최했다. 현대자동차와 공동으로 주관한 이 행사는 현대자동차그룹과 LG전자, 콘티넨탈, HL클레무브 등 국내외 주요 협력사의 차량 소프트웨어 실무자 300여명이 모여 SDV 관련 기술 트렌드와 시장 환경, AUTOSAR 적용 경험 등을 함께 논의했다.
AUTOSAR(AUTomotive Open System ARchitecture)는 차량 전장부품용 임베디드 소프트웨어 사용 급증에 대응하기 위한 표준화된 플랫폼이다. 현대오토에버는 AUTOSAR 기반의 차량SW 플랫폼 mobilgene을 개발·공급하고 있다. mobilgene은 전동화, 섀시, 인포테인먼트 도메인 등 전 도메인에 적용되고 있다.
최근 현대오토에버는 AUTOSAR의 신규 사양을 준수하여 멀티코어와 기능 안전 대응에 중점을 둔 mobilgene Classic 2.0의 개발을 완료했다. mobilgene Classic 2.0은 자동차 기능안전 국제표준 ISO–26262의 최고 등급 ASIL–D 인증을 획득해 더욱 수준 높은 기능 안전을 확보한 플랫폼이다. 
`,
    `카카오 회사는 올해부터 더 나은 세상을 위한 카카오의 약속과 책임을 다하기 위해 인재 육성 프로그램인 카카오 테크 캠퍼스를 실시하고 있다. 각 지역 대학교와 협업해 개발자를 육성하고 비수도권 교육 격차 등 사회 문제를 해결해 정보기술(IT) 업계의 건강한 성장을 견인하기 위해서다. 지방 국립 거점 대학 학생들을 대상으로 팀 프로젝트 기반의 자기주도적 성장 기회를 제공하며 현업에 바로 투입할 수 있는 수준의 주니어 개발자를 양성하는 것을 목표로 한다.
카카오 테크 캠퍼스는 이러한 노력으로 고용노동부와 한국산업인력공단에서 추진하는 ‘청년친화형 기업 ESG 지원사업’에 선정됐다. 지역 대학과의 협업으로 물리적인 제약 없이 취·창업 역량을 높일 수 있다는 부분을 인정받은 결과다.
단계적 역량 향상을 지원할 수 있도록 4월부터 11월까지 총 8개월 동안 3단계의 체계적인 커리큘럼으로 진행된다. 특히 3단계 교육에서는 학교 교육 과정에서 배우기 어려운 현업의 일하는 방식을 경험하고 실제 서비스를 직접 구현해내며 문제해결 역량을 키울 수 있는 점이 큰 장점으로 꼽힌다.
봄 학기 동안 진행되는 1단계 교육은 온라인으로 학습하는 기간으로 웹 개발의 기초를 익히는 내용으로 진행된다. 이후 여름 학기에 진행되는 2단계 교육은 1단계에서 학습한 기초를 활용해 카카오 쇼핑하기 페이지를 직접 클로닝하는 프로젝트를 진행한다. 마지막으로 가을 학기에 진행되는 3단계에는 하나의 신규 서비스를 직접 기획해서 개발, 배포까지 경험해볼 수 있는 프로젝트를 진행한다. 기획 단계는 2박 3일간의 오프라인 몰입 교육을 통해 전문 강사 및 운영진이 학생들을 밀착 지원한다. 이후 기획한 내용을 실제 팀 단위로 함께 개발하고 배포까지 진행하는데 이를 통해 학생들은 개발 프로세스 전 단계를 경험하고 다른 직무와의 협업 역량을 쌓을 수 있다.`,
`보안회사 안랩이 지난 24일부터 27일까지  안랩 사옥 및 온라인에서 사내 연구개발 인력을 대상으로 진행한 ‘안랩 개발자 컨퍼런스(AhnLab Developers Conference)’를 성료했다.  안랩 개발자 컨퍼런스는 안랩 연구개발 인력의 개발역량 강화와 지식 확장을 위해 기획된 행사다. 
 “급변하는 IT기술 트렌드에 맞춰 성장하기 위해서는 변화를 빠르게 습득하고, 이를 반영한 계획과 실행을 꾸준히 반복해야 한다”며 “안랩은 앞으로도 업무 계획 수립 및 실행력 제고에 도움이 될 수 있는 다양한 교육 프로그램과 성과 체계를 마련해 구성원들의 직무 전문성 강화를 적극 지원할 것”이라고 말했다. “안랩의 가장 소중한 자산은 안랩의 구성원이며, 구성원의 성장이 곧 회사의 성장”이라며 “이번 개발자 콘퍼런스에서 안랩 구성원들의 ‘끊임없는 연구개발’ 실천과 개인의 성장에 튼튼한 기반이 될 다양한 지식을 얻어 가길 바란다”고 말했다.
키노트 세션을 진행한 네이버클라우드 이노베이션 센터장은 ‘인공지능과 공존하기’를 주제로 현재 가장 주목받고 있는 초거대 생성 인공지능 기술의 생태계를 소개했다. 하 센터장은 “인공지능을 사용하는 사람이 개발자를 대체할 수도 있는 시대이기 때문에 기업과 개인 차원에서 인공지능 활용도를 높일 수 있는 방안을 고민하고 준비하는 것이 중요하다”고 강조했다.
`,
 `28일부터 29일까지 송도컨벤시아에서 ‘제5회 인천 학생 SW해커톤 챌린지’를 개최했다. 행사에는 인천 지역의 초등학생부터 고등학생 30팀 60명이 참여했으며, 인공지능 시대를 살아가는 학생들에게 디지털 기술에 대한 주체적인 이해와 올바른 활용 능력을 길러주기 위한 목적으로 진행했다고 밝혔다. 해커톤 주제는 ‘우리 지역의 문제점 해결 및 미래 모습 구현하기’로 교통, 범죄 예방, 도시 경관 개선 등 다양한 세부 미션을 주어진 시간 안에 해결하고 산출물을 제작해 발표하는 과정으로 구성했다. 이틀간의 행사에서 학생들은 주어진 주제를 깊이 있게 연구하며 AIoT, AI비전, 딥러닝, 사물인식 등 다양한 인공지능 기술을 활용해 창의적이고 혁신적인 솔루션을 제시했다.
교육청은 지난 9월부터 초‧중‧고 학생 200명을 대상으로 사전 SW캠프를 실시했으며, 프로젝트를 우수하게 수행한 학생 30팀을 선발해 해커톤 본선을 진행했다. 
해커톤에 참여한 학생은 소감을 통해 “프로젝트 과정에서 어렵고 힘든 부분도 있었지만 또래 친구들과 도시 속의 다양한 문제 찾아보면서 한층 더 성장할 수 있는 시간을 보냈다”며 “해커톤을 계기로 모두를 위해 지식과 시간의 한계를 넘어 세상을 빛낼 기술을 구현하고 싶다”고 말했다.
`,
`IT업계 구직자들은 본인의 커리어 성장을 위해 하루 2시간 이상을 투자한다는 조사 결과가 나왔다.  IT 인재양성 스타트업 코드스테이츠가 공개한 업계 구직자 및 현업 종사자들의 목표와 발전전략을 다룬 '커리어 활동 분석 리포트-유저 프로파일링 인사이트'에 따르면, IT업계 구직자들이 커리어 성장 활동에 들이는 시간은 하루 평균 2.5시간으로 조사됐다. 재직자의 경우 일평균 1.1시간 가량을 역량 개발에 쏟는 것으로 집계됐다.
커리어 성장에 가장 필요한 활동에 대해서도 물었다. IT 업계 구직자와 재직자는 각각 25%, 19%의 비율로 커리어 성장에 가장 필요한 활동으로 '사이드 프로젝트 참여'를 꼽았다. 반면 이들이 실제 역량 증진을 위해 주로 시도하는 활동들은 서적, VOD 시청, 강의 및 세미나 참여 등 접근성이 높은 콘텐츠 소비에 쏠린 것으로 조사됐다.
업계 종사자들의 주된 커리어 고민도 조사했다. 1년차 미만부터 2년차까지의 재직자들은 22%의 비율로 '기술력 한계 및 확장'에 대한 고민을 가지고 있다고 응답했다.`,
 `네이버가 2023년 3분기에 매출액 2조4453억 원, 영업이익 3802억 원, 당기순이익 3562억 원을 각각 기록했다고 3일 밝혔습니다. 이는 지난해 같은 기간보다 각각 18.9%, 15.1%, 53.8% 늘어난 것으로 매출과 영업이익 모두 분기별 역대 최대치를 경신했습니다. 네이버 대표는 “3분기에는 생성형 AI 서비스 라인업과 수익화 로드맵을 공개하며 앞으로의 AI 사업 방향을 제시했으며, 각 영역별 성장세를 이어 나갈 토대를 마련하고 있다”고 밝혔습니다.
한편, 네이버는 올해 초 새롭게 발표한 주주환원 계획에 따라 총 624억 원 규모의 현금배당을 8월 22일 지급 완료하였으며, 11월 7일에는 10월 30일 종가 기준 약 3053억 원 규모의 기 보유 자기주식 1%(발행주식의 1%)를 특별 소각할 예정입니다.

`,
`
‘프롬프트 엔지니어링’의 중요성이 얼마나 커졌을까? 일리노이 공대 겸임 교수는 공학 대학원생 전원이 이력서와 링크드인 프로필에 ‘AI 프롬프트 엔지니어링’ 기술을 넣었다고 할 수 있을 정도로 중요해졌다고 말했다. 
그는 “프롬프트 엔지니어링은 매우 중요하다. 오픈AI, 구글, 아마존, 마이크로소프트뿐만 아니라 모든 오픈소스 모델에서도 매우 중요하다. 곧 실무에 투입될 인적 자원은 어떤 방법으로든 프롬프트 엔지니어링을 습득해야 한다”라고 강조했다.  
1만 건 이상의 구인 공고에서 ‘프롬프트 엔지니어’를 언급하고 있으며, 
‘프롬프트 엔지니어’를 명시한 공고도 100건에 달할 만큼 프롬프트 엔지니어링 수요가 급격하게 증가하고 있다. 
링크드인 대변인은 2023년 초부터 전 세계적으로 프로필에 ‘GAI’, ‘챗GPT’, ‘프롬프트 엔지니어링’, ‘프롬프트 크래프팅’이라는 용어를 추가한 회원 수가 매달 평균 75% 증가했다고 밝혔다.
 ‘AI 책임자’ 직책을 맡았거나 맡고 있는 링크드인 회원 수도 지난 5년 동안 약 3배 늘었다. “현시점에서 프롬프트 엔지니어링을 다룬 교과서가 없기 때문에 ‘프롬프트 엔지니어링 역량 개발’이라고 하는 것이 대부분 직접 해보면서 배우는 것”이라면서, “생성형 AI 도구를 사용해 본 단 9개월의 경험으로 어떤 전문성을 갖출 수 있겠는가?”라고 지적했다. “따라서 가장 중요한 것은 기업 내 AI 리터러시 프로그램을 구축하고 직원 역량 강화를 시작하는 것이다”라고 전했다.                  
`
  ];

  const randomIndex = Math.floor(Math.random() * newsText.length); // Generates a random index
  const randomValue = newsText[randomIndex];
  console.log("뉴스: ", randomValue);
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

  useEffect(() => {
    fetchSummary();
  }, []);

  const handleNextNews = () => {
    fetchNewsData();
  };

  return (
    <div className={styles.news}>
      <b className={styles.comment}>화면을 아래로 넘겨주세요.</b>
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
          {newsinfo && newsinfo.length > 0 ? (
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
            <img
              className={styles.image9Icon}
              src="https://itimgstorage.blob.core.windows.net/source/giphy.gif"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default News;
