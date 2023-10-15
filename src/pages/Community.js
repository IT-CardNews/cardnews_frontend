import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Community.module.css";
import axios from "axios";
const Community = () => {
  const [articles, setArticles] = useState([]);
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
      console.log(response.data);
      setArticles(response.data); 
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

 
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
