import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Community.module.css";
import axios from "axios";
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
  let board_length = 0;
  let articles = [];

  const postBoard = () => {
    navigate("/write");
  };

  //사용자 정보 가져오기
  // const getUser = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://eatit-backend.azurewebsites.net/userinfo"
  //     );
  //     console.log("유저 정보 가져오기 성공: ", response);
  //   } catch (error) {
  //     console.error("유저 가져오기 에러 발생: ", error);
  //     if (error.response) {
  //       // 서버가 오류응답을 반환한 경우
  //       console.error("유저 서버 응답: ", error.response.data);
  //     }
  //   }
  // };

  const getBoard = async () => {
    try {
      const response = await axios.get(
        "https://eatit-backend.azurewebsites.net/test/board"
      );
      articles = response.data.map((item) => ({
        boardId: item.boardId,
        boardTitle: item.boardTitle,
        boardWriter: item.boardWriter,
        boardWriterId: item.boardWriterId.toString(),
        boardDaytime: "2023년 09월 20일 (화) 오전 8:15", // 이 부분은 적절하게 바꾸셔야 합니다.
        boardContent: item.boardContent,
      }));
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  //--------------------------------------------------------

  // const currentTime = new Date().toISOString();
  // const payload = {
  //   boardId: 1,
  //   boardWriterId: 3026164526,
  //   boardWriter: "양하연",
  //   boardTitle: "배고프다",
  //   boardContent: "밥먹고싶다",
  //   // boardDaytime: Date.now() // 현재 시간
  // };

  // try {
  //   const response = await axios.post(
  //     "https://eatit-backend.azurewebsites.net/test/board/write",
  //     payload
  //   );
  //   //글쓰기 id는 때는 API에서 ID 전체를 가져오고 마지막 ID + 1 하기
  //   console.log("게시판 글쓰기 성공: ", response);
  //   console.log(currentTime, "글쓰기");
  // } catch (error) {
  //   console.error("게시판 글쓰기 에러 발생: ", error);
  //   if (error.response) {
  //     // 서버가 오류응답을 반환한 경우
  //     console.error("서버 응답: ", error.response.data);
  //   }
  // }

  //getBoard response 임시값
  articles = [
    {
      boardId: 1,
      boardTitle: "파이썬의 range() 함수와 for-in 루프",
      boardWriter: "김철진",
      boardWriterId: "3",
      boardDaytime: "2023년 06월 27일 (화) 오전 8:15",
      boardContent: "다른 프로그래밍 언어를 쓰시다가 파이썬으로 넘어온 분이...",
    },
    {
      boardId: 2,
      boardTitle: "안녕하세요",
      boardWriter: "양하연",
      boardWriterId: "4",
      boardDaytime: "2023년 08월 27일 (화) 오전 8:33",
      boardContent:
        "코딩을 공부하고자 합니다 요즘은 어떤 언어가 유행인지 궁금한데 파이썬은 어떤가요? 공부할만 할까요? ",
    },
    {
      boardId: 3,
      boardTitle: "요즘 백엔드 트렌드에 대해서",
      boardWriter: "조영서",
      boardWriterId: "5",
      boardDaytime: "2023년 08월 27일 (화) 오전 9:15",
      boardContent: "요즘 백엔드 트렌드 요즘도 스프링이 유행일까요?",
    },
    {
      boardId: 4,
      boardTitle: "노드 js나 부트캠프 정보",
      boardWriter: "김하은",
      boardWriterId: "6",
      boardDaytime: "2023년 08월 27일 (화) 오전 10:15",
      boardContent: "안녕하세요 개발자 취업을 생각하고 있습니다. 요즘 부트캠프 어디가 좋을까요?",
    },
    {
      boardId: 5,
      boardTitle: "깃헙 맞팔하실 분",
      boardWriter: "홍길동",
      boardWriterId: "7",
      boardDaytime: "2023년 08월 27일 (화) 오전 10:15",
      boardContent: "안녕하세요 컴공과를 전공중인 학생입니다. 혹시 깃허브 맞팔하실 분 계실까요?? 답변 주시면 감사하겠습니다!",
    },
    {
      boardId: 6,
      boardTitle: "프론트엔드 개발자 공고",
      boardWriter: "김은수",
      boardWriterId: "8",
      boardDaytime: "2023년 08월 27일 (화) 오전 12:15",
      boardContent: "안녕하세요 현재 00 기업에서 CTO를 맡고 있는 김은수라고 합니다. 저희 기업에서 프론트엔드 신입개발자를 모집하고 있습니다. 스택은 프론트와 리액트이며, 관심있으신 분은 제 이메일로 연락주시면 감사하겠습니다!",
    },
  ];
  //------------------------------------------------------------
  useEffect(() => {
    getBoard();
  }, []);

  return (
    <div>
      <div className={styles.community}>
        <b className={styles.communityTitle}>Community</b>
        <div
          onClick={postBoard}
          style={{
            float: "right",
            marginTop: "30px",
            padding: "20px",
            width: "10vw",
            height: "0.1vh",
            lineHeight: "0.1vh",
            color: "var(--color-lightsteelblue)",
            fontWeight: "bold",
            textAlign: "center",
            justifyContent: "center",
            borderRadius: "10px",
            borderColor: "#9db2ce",
            border: "1.5px solid #9db2ce",
            fontSize: "13px",
          }}>
          글쓰기
        </div>
        {articles.map((article, index) => (
          <div key={index} onClick={onArticle1ContainerClick}>
            <div>
              <img
                alt=""
                src={article.profileImage} //사용자 프로필사진
              />
              <div>{article.boardWriter}</div> {/* 작성자 */}
            </div>
            <div>
              <p>
                <b>{article.boardTitle}</b> {/* 제목 */} <p></p>
                {article.boardContent} {/* 내용 */}
              </p>
            </div>
            <div className={styles.writetime}>{article.boardDaytime}</div>{" "}
            {/* 작성일 */}
            <div
              style={{
                width: "100vw",
                background: "#EEEFF3",
                height: "15px",
                marginTop: "30px",
                zIndex: "0",
              }}></div>
          </div>
        ))}

       
     

        {/* 하단바 */}
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
              <div
                className={styles.navigationmenuHome1}
                onClick={onSearchClick}>
                <img
                  className={styles.iconBriefcase}
                  alt=""
                  src="https://itimgstorage.blob.core.windows.net/source/search.svg"
                />
                <div className={styles.job}>Search</div>
              </div>
            </div>
            <div className={styles.navigationmenuRight}>
              <div className={styles.navigationmenuHome2}>
                <img
                  className={styles.iconBriefcase}
                  alt=""
                  src="https://itimgstorage.blob.core.windows.net/source/-icon-messages-21.svg"
                />
                <div className={styles.community2}>Community</div>
              </div>
              <div
                className={styles.navigationmenuHome3}
                onClick={onMyPageClick}>
                <img
                  className={styles.iconBriefcase}
                  alt=""
                  src="https://itimgstorage.blob.core.windows.net/source/user1.svg"
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
      </div>
    </div>
  );
};

export default Community;
