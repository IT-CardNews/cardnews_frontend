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

  const getBoard = async () => {
    try {
      const response = await axios.get(
        "https://eatit-backend.azurewebsites.net/test/board"
      );
      console.log("게시판 가져오기 성공: ", response);
      board_length = response.data.boardId;
    } catch (error) {
      console.error("게시판 가져오기 에러 발생: ", error);
      if (error.response) {
        // 서버가 오류응답을 반환한 경우
        console.error("게시판 가져오기 서버 응답: ", error.response.data);
      }
    }
  };
  //--------------------------------------------------------
  const postBoard = async () => {
    const currentTime = new Date().toISOString();
    const payload = {
      boardId: 1,
      boardWriterId: 3026164526,
      boardWriter: "양하연",
      boardTitle: "배고프다",
      boardContent: "밥먹고싶다",
      // boardDaytime: Date.now() // 현재 시간
    };

    try {
      const response = await axios.post(
        "https://eatit-backend.azurewebsites.net/test/board/write",
        payload
      );
      //글쓰기 id는 때는 API에서 ID 전체를 가져오고 마지막 ID + 1 하기
      console.log("게시판 글쓰기 성공: ", response);
      console.log(currentTime, "글쓰기");
    } catch (error) {
      console.error("게시판 글쓰기 에러 발생: ", error);
      if (error.response) {
        // 서버가 오류응답을 반환한 경우
        console.error("서버 응답: ", error.response.data);
      }
    }
  };

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
      boardDaytime: "2023년 08월 27일 (화) 오전 8:15",
      boardContent:
        "코딩을 공부하고자 합니다 요즘은 어떤 언어가 유행인지 궁금한데 파이썬은 어떤가요? 공부할만 할까요? ",
    },
    {
      boardId: 3,
      boardTitle: "코딩 공부 다들 어떻게 하시나요?",
      boardWriter: "양하연",
      boardWriterId: "4",
      boardDaytime: "2023년 08월 27일 (화) 오전 8:15",
      boardContent: "다들 코딩 공부를 어떻게 하시는지 궁금하네요 ",
    },

    // 다른 게시글들...
  ];
  //------------------------------------------------------------
  useEffect(() => {
    getBoard();
  }, []);

  return (
    <div>
      <div className={styles.community}>
        <div onClick={postBoard}>글쓰기</div>
        <b className={styles.communityTitle}>Community</b>
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
      </div>
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
            <div className={styles.navigationmenuHome2}>
              <img
                className={styles.iconBriefcase}
                alt=""
                src="https://itimgstorage.blob.core.windows.net/source/-icon-messages-21.svg"
              />
              <div className={styles.community2}>Community</div>
            </div>
            <div className={styles.navigationmenuHome3} onClick={onMyPageClick}>
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
  );
};

export default Community;
