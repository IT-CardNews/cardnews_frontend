import styles from "./Interest.module.css";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";


const Interest = () => {
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    navigate("/news");
  }, [navigate]);


  return (
    <div className={styles.interest} data-scroll-to="interestContainer">
      <img className={styles.image8Icon} alt="" src="https://sahayeon0717.blob.core.windows.net/media/image-8@2x.png" />
      <img className={styles.image7Icon} alt="" src="https://sahayeon0717.blob.core.windows.net/media/image-7@2x.png" />
      <img className={styles.image6Icon} alt="" src="https://sahayeon0717.blob.core.windows.net/media/image-6@2x.png" />
      <img className={styles.image5Icon} alt="" src="https://sahayeon0717.blob.core.windows.net/media/image-5@2x.png" />
      <img className={styles.image4Icon} alt="" src="https://sahayeon0717.blob.core.windows.net/media/image-4@2x.png" />
      <img className={styles.image3Icon} alt="" src="https://sahayeon0717.blob.core.windows.net/media/image-3@2x.png" />
      <img className={styles.image2Icon} alt="" src="https://sahayeon0717.blob.core.windows.net/media/user_pic.png" />
      <img className={styles.image1Icon} alt="" src="https://sahayeon0717.blob.core.windows.net/media/image-1@2x.png" />
      <div className={styles.frameParent}>
        <div className={styles.wrapper}>
          <b className={styles.b}>관심있는 분야를 선택해주세요</b>
        </div>
        <div className={styles.container}>
          <div className={styles.div}>
            맞춤형 개인 설정을 통해 원하는 분야의 뉴스를 추천해드립니다.
          </div>
        </div>
        <div className={styles.ellipseParent}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
          <div className={styles.aiWrapper}>
            <div className={styles.ai}>AI</div>
          </div>
          <div className={styles.ellipseGroup}>
            <div className={styles.groupChild} />
            <div className={styles.groupItem} />
            <div className={styles.aiWrapper}>
              <div className={styles.ai}>Security</div>
            </div>
            <div className={styles.groupChild1} />
          </div>
          <div className={styles.ellipseContainer}>
            <div className={styles.groupChild} />
            <div className={styles.groupItem} />
            <div className={styles.groupChild1} />
            <div className={styles.aiWrapper}>
              <div className={styles.ai}>networking</div>
            </div>
          </div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
          <div className={styles.groupChild7} />
          <div className={styles.aiWrapper}>
            <div className={styles.ai}>Hardware</div>
          </div>
          <div className={styles.aiWrapper}>
            <div className={styles.ai}>Hardware</div>
          </div>
        </div>
      </div>
      <div className={styles.interestInner}>
        <div className={styles.appWrapper}>
          <div className={styles.ai}>App</div>
        </div>
      </div>
      <div className={styles.cloudComputingWrapper}>
        <div className={styles.ai}>
          <p className={styles.cloud}>Cloud</p>
          <p className={styles.cloud}>Computing</p>
        </div>
      </div>
      <div className={styles.bigDataWrapper}>
        <div className={styles.ai}>Big Data</div>
      </div>
      <div className={styles.softwareWrapper}>
        <div className={styles.ai}>software</div>
      </div>
      <img className={styles.interestChild} alt="" src="https://sahayeon0717.blob.core.windows.net/media/rectangle-2.svg" />
      <div onClick={onClick} className={styles.div1}>저장</div>
    </div>
  );
};

export default Interest;
