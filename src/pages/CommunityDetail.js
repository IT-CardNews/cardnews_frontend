import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CommunityDetail.module.css";
const CommunityDetail = () => {
  const navigate = useNavigate();

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

  const onFrameContainerClick = useCallback(() => {
    navigate("/news");
  }, [navigate]);

  return (
    <div className={styles.communitydetail}>
      <div className={styles.homeBarmini}>
        <div className={styles.homeIndicator} />
      </div>
      <b className={styles.community}>Community</b>
      <b className={styles.rangeForIn}>파이썬의 range() 함수와 for-in 루프</b>
      <div className={styles.forContainer}>
        <p className={styles.p}>
          다른 프로그래밍 언어를 쓰시다가 파이썬으로 넘어온 분들
        </p>
        <p className={styles.p}>
          이 `for` 루프 때문에 적지 않게 당황하시는 것을 자주 보게
        </p>
        <p className={styles.p}>됩니다.</p>
        <p className={styles.p}>&nbsp;</p>
        <p
          className={styles.p}
        >{`다른 언어에서는 일반적으로 \`for\` 루프를 작성할 `}</p>
        <p className={styles.p}>때 항상 다음 3가지를 명시를 하면서 시작하죠?</p>
        <p className={styles.p}></p>
        <p className={styles.p}>- 인덱스 변수의 초기 값</p>
        <p className={styles.p}>- 반복 지속 조건</p>
        <p className={styles.p}>- 인덱스 변수 갱신 방법</p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          예를 들어, 자바의 경우 보통 다음과 같은 형태로 `for` 루프를
        </p>
        <p className={styles.p}> 돌고요.</p>
        <p className={styles.p}></p>
        <p className={styles.p}>{`for (int i = 0; i < letters.length; i++) {
`}</p>
        <p className={styles.p}> System.out.println(letters[i]);</p>
        <p className={styles.p}>{`}
`}</p>
        <p className={styles.p}>```</p>
        <p className={styles.p}></p>
        <p
          className={styles.p}
        >{`자바스크립트에서 \`for\` 루프를 돌리는 모습도 크게 다르지는 `}</p>
        <p className={styles.p}>않습니다.</p>
        <p className={styles.p}></p>
        <p className={styles.p}>```js</p>
        <p className={styles.p}>{`for (let i = 0; i < letters.length; i++) {
`}</p>
        <p className={styles.p}> console.log(letters[i]);</p>
        <p className={styles.p}>{`}
`}</p>
        <p className={styles.p}>```</p>
        <p className={styles.p}>
          하지만 파이썬에서는 이러한 전형적인 `for` 문법을 제공하지
        </p>
        <p className={styles.p}>
          않고, 비교적 다른 언어에서는 나중에 추가된 `for-in` 문법이
        </p>
        <p className={styles.p}>기본으로 채택이 되었어요.</p>
        <p className={styles.p}></p>
        <p
          className={styles.p}
        >{`그래서 위에서 다른 언어로 작성된 for 루프를 굳이 파이썬의 `}</p>
        <p className={styles.p}>
          문법으로 옮겨보면 아래와 같은 작성할 수 있을 것입니다.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>```py</p>
        <p className={styles.p}>for idx in range(len(letters)):</p>
        <p className={styles.p}> print(letters[idx])</p>
        <p className={styles.p}>```</p>
        <p className={styles.p}></p>
        <p
          className={styles.p}
        >{`여기서 눈에 띄는 부분은 바로 \`in\` 키워드 바로 뒷 부분에 `}</p>
        <p className={styles.p}>
          `range()`라는 함수가 사용되고 있다는 것인데요. 👀
        </p>
        <p className={styles.p}></p>
        <p
          className={styles.p}
        >{`이번 글에서는 파이썬에서 \`range()\` 함수가 도대체 뭐길래 `}</p>
        <p
          className={styles.p}
        >{`이렇게 \`for\` 루프에서 자주 보이는지 자세히 파해쳐보도록 `}</p>
        <p className={styles.p}>할게요!</p>
        <p className={styles.p}></p>
      </div>
      <div className={styles.communitydetailChild} />
      <div className={styles.userInfo}>
        <img className={styles.icon} alt="" src="https://itimgstorage.blob.core.windows.net/source/user_pic.png" />
        <div className={styles.div}>김철진</div>
        <div className={styles.wrapper}>
          <div className={styles.div1}>스타트업 개발자</div>
        </div>
      </div>
      <b className={styles.rangeForIn}>파이썬의 range() 함수와 for-in 루프</b>
      <div className={styles.forContainer}>
        <p className={styles.p}>
          다른 프로그래밍 언어를 쓰시다가 파이썬으로 넘어온 분들
        </p>
        <p className={styles.p}>
          이 `for` 루프 때문에 적지 않게 당황하시는 것을 자주 보게
        </p>
        <p className={styles.p}>됩니다.</p>
        <p className={styles.p}>&nbsp;</p>
        <p
          className={styles.p}
        >{`다른 언어에서는 일반적으로 \`for\` 루프를 작성할 `}</p>
        <p className={styles.p}>때 항상 다음 3가지를 명시를 하면서 시작하죠?</p>
        <p className={styles.p}></p>
        <p className={styles.p}>- 인덱스 변수의 초기 값</p>
        <p className={styles.p}>- 반복 지속 조건</p>
        <p className={styles.p}>- 인덱스 변수 갱신 방법</p>
        <p className={styles.p}></p>
        <p className={styles.p}>
          예를 들어, 자바의 경우 보통 다음과 같은 형태로 `for` 루프를
        </p>
        <p className={styles.p}> 돌고요.</p>
        <p className={styles.p}></p>
        <p className={styles.p}>```java</p>
        <p className={styles.p}>{`for (int i = 0; i < letters.length; i++) {
`}</p>
        <p className={styles.p}> System.out.println(letters[i]);</p>
        <p className={styles.p}>{`}
`}</p>
        <p className={styles.p}>```</p>
        <p className={styles.p}></p>
        <p
          className={styles.p}
        >{`자바스크립트에서 \`for\` 루프를 돌리는 모습도 크게 다르지는 `}</p>
        <p className={styles.p}>않습니다.</p>
        <p className={styles.p}></p>
        <p className={styles.p}>```js</p>
        <p className={styles.p}>{`for (let i = 0; i < letters.length; i++) {
`}</p>
        <p className={styles.p}> console.log(letters[i]);</p>
        <p className={styles.p}>{`}
`}</p>
        <p className={styles.p}>```</p>
        <p className={styles.p}>
          하지만 파이썬에서는 이러한 전형적인 `for` 문법을 제공하지
        </p>
        <p className={styles.p}>
          않고, 비교적 다른 언어에서는 나중에 추가된 `for-in` 문법이
        </p>
        <p className={styles.p}>기본으로 채택이 되었어요.</p>
        <p className={styles.p}></p>
        <p
          className={styles.p}
        >{`그래서 위에서 다른 언어로 작성된 for 루프를 굳이 파이썬의 `}</p>
        <p className={styles.p}>
          문법으로 옮겨보면 아래와 같은 작성할 수 있을 것입니다.
        </p>
        <p className={styles.p}></p>
        <p className={styles.p}>```py</p>
        <p className={styles.p}>for idx in range(len(letters)):</p>
        <p className={styles.p}> print(letters[idx])</p>
        <p className={styles.p}>```</p>
        <p className={styles.p}></p>
        <p
          className={styles.p}
        >{`여기서 눈에 띄는 부분은 바로 \`in\` 키워드 바로 뒷 부분에 `}</p>
        <p className={styles.p}>
          `range()`라는 함수가 사용되고 있다는 것인데요. 👀
        </p>
        <p className={styles.p}></p>
        <p
          className={styles.p}
        >{`이번 글에서는 파이썬에서 \`range()\` 함수가 도대체 뭐길래 `}</p>
        <p
          className={styles.p}
        >{`이렇게 \`for\` 루프에서 자주 보이는지 자세히 파해쳐보도록 `}</p>
        <p className={styles.p}>할게요!</p>
        <p className={styles.p}></p>
      </div>
      <div className={styles.comment}>
        <div className={styles.homeBarmini}>
          <div className={styles.homeIndicator} />
        </div>
        <div className={styles.homeBarmini}>
          <div className={styles.homeIndicator} />
        </div>
        <b className={styles.b}>댓글 6</b>
        <div className={styles.comment1}>
          <img className={styles.icon} alt="" src="https://itimgstorage.blob.core.windows.net/source/profilepic@2x.png" />
          <div className={styles.parent}>
            <div className={styles.div2}>김기태</div>
            <div className={styles.div3}>스타트업 개발자 / 1시간 전</div>
          </div>
          <div className={styles.comment11}>
            <div className={styles.commentBox} />
            <div className={styles.foritemItemContainer}>
              <p className={styles.p}>
                요즘엔 자바에서도 아래와 같은 문법이 많이 쓰이기도 하죠
              </p>
              <p className={styles.p}>&nbsp;</p>
              <p className={styles.p}>{`for(Item item : items){`}</p>
              <p className={styles.p}>&nbsp;</p>
              <p className={styles.p}>{`}`}</p>
              <p className={styles.p}>
                자바도 새로운 것을 흡수하는 것 같아 좋은 것 같습니다 ㅎ
              </p>
            </div>
          </div>
        </div>
        <div className={styles.commentChild} />
        <div className={styles.comment2}>
          <div className={styles.comment21}>
            <div className={styles.commentBox1} />
            <div className={styles.div4}>
              <p className={styles.p55}>
                좋은 부분 말씀해주셔서 감사합니다! 네 프로그래밍 언어들이 서
              </p>
              <p className={styles.p}>
                로 장점을 취하면서 진화하고 있는 것 같습니다!
              </p>
            </div>
          </div>
          <div className={styles.div5}>댓글 달기</div>
          <div className={styles.userInfo1}>
            <div className={styles.userpic2Wrapper}>
              <img className={styles.icon} alt="" src="https://itimgstorage.blob.core.windows.net/source/user_pic.png" />
            </div>
            <div className={styles.writerWrapper}>
              <div className={styles.writer}>
                <div className={styles.writerChild} />
                <div className={styles.div6}>작성자</div>
              </div>
            </div>
            <div className={styles.div7}>스타트업 개발자 / 1시간 전</div>
            <div className={styles.div8}>김철진</div>
          </div>
        </div>
        <div className={styles.comment3}>
          <div className={styles.homeBarmini}>
            <div className={styles.homeIndicator} />
          </div>
          <div className={styles.homeBarmini}>
            <div className={styles.homeIndicator} />
          </div>
          <div className={styles.comment31}>
            <div className={styles.userInfro3}>
              <img className={styles.icon} alt="" src="https://itimgstorage.blob.core.windows.net/source/profilepic2@2x.png" />
              <div className={styles.div9}>용승림</div>
              <div className={styles.div10}>대학생 / 방금 전</div>
            </div>
            <div className={styles.comment32}>
              <div className={styles.commentBox2} />
              <div className={styles.div11}>
                <p className={styles.p}>
                  너무 도움되는 게시글이에요~! 파이썬의 무궁무진한 발전을 기대
                </p>
                <p className={styles.p}>해보겠습니다!</p>
              </div>
            </div>
          </div>
          <div className={styles.comment4}>
            <div className={styles.comment21}>
              <div className={styles.commentBox1} />
              <div className={styles.itContainer}>
                <p className={styles.p55}>
                  @ 용승림 감사합니다 ^^ 파이썬이 점차 발전하는 모습을 보며
                </p>
                <p className={styles.p}>
                  IT 트렌드는 정말 빠르게 변화한다는 것을 느낍니다!
                </p>
              </div>
            </div>
            <div className={styles.userInfo1}>
              <div className={styles.writerWrapper}>
                <div className={styles.writerChild} />
                <div className={styles.div6}>작성자</div>
              </div>
              <div className={styles.div7}>스타트업 개발자 / 1시간 전</div>
              <img className={styles.icon} alt="" src="https://itimgstorage.blob.core.windows.net/source/user_pic.png" />
            </div>
            <div className={styles.div5}>댓글 달기</div>
          </div>
          <div className={styles.div15}>김철진</div>
          <div className={styles.commentItem} />
          <div className={styles.div16}>댓글을 남겨보세요</div>
        </div>
        <div className={styles.commentInner} />
      </div>
      <div className={styles.div17}>2023년 06월 27일 (화) 오전 8:15</div>
      <div className={styles.div18}>{`좋아요 12  `}</div>
      <img className={styles.shareIcon} alt="" src="https://itimgstorage.blob.core.windows.net/source/share-icon.svg" />
      <img className={styles.startIcon} alt="" src="https://itimgstorage.blob.core.windows.net/source/start-icon.svg" />
      <div className={styles.menu1homelight}>
        <div className={styles.navigationmenuLeftParent}>
          <div className={styles.navigationmenuLeft}>
            <div
              className={styles.navigationmenuHome}
              onClick={onJobsClick}
            >
              <img
                className={styles.iconBriefcase}
                alt=""
                src="https://itimgstorage.blob.core.windows.net/source/-icon-briefcase3.svg"
              />
              <div className={styles.job}>JOB</div>
            </div>
            <div
              className={styles.navigationmenuHome1}
              onClick={onSearchClick}
            >
              <img className={styles.searchIcon} alt="" src="https://itimgstorage.blob.core.windows.net/source/search.svg" />
              <div className={styles.job}>Search</div>
            </div>
          </div>
          <div className={styles.navigationmenuRight}>
            <div className={styles.navigationmenuHome2}>
              <img
                className={styles.iconMessages2}
                alt=""
                src="https://itimgstorage.blob.core.windows.net/source/-icon-messages-27.svg"
              />
              <div className={styles.community1}>Community</div>
            </div>
            <div
              className={styles.navigationmenuHome3}
              onClick={onMyPageClick}
            >
              <img className={styles.searchIcon} alt="" src="https://itimgstorage.blob.core.windows.net/source/user2.svg" />
              <div className={styles.job}>Profile</div>
            </div>
          </div>
          <div
            className={styles.navigationmenuHome4}
            onClick={onNewsClick}
          >
            <div
              className={styles.homelinearWrapper}
              onClick={onFrameContainerClick}
            >
              <img
                className={styles.searchIcon}
                alt=""
                src="https://itimgstorage.blob.core.windows.net/source/homelinear2.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityDetail;
