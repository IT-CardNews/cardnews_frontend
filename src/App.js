import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Search from "./pages/Search";
import Community from "./pages/Community";
import JobsDetail from "./pages/JobsDetail";
import Jobs from "./pages/Jobs";
import NewsDetail from "./pages/NewsDetail";
import News from "./pages/News";
import Interest from "./pages/Interest";
import SearchDetail from "./pages/SearchDetail";
import CommunityDetail from "./pages/CommunityDetail";
import Landing from "./pages/Landing";
import MyPage from "./pages/MyPage";
import { useEffect } from "react";
import ImageUploadForm from "./pages/ImageUploadForm";
import Writeboard from "./pages/Writeboard.jsx";
import JobsDetail2 from "./pages/JobsDetail2";
import Jobs2 from "./pages/Jobs2";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/community":
        title = "커뮤니티";
        metaDescription = "";
        break;
      case "/jobsdetail":
        title = "취업공고상세";
        metaDescription = "";
        break;
      case "/jobs":
        title = "취업공고";
        metaDescription = "";
        break;
      case "/newsdetail":
        title = "뉴스 상세";
        metaDescription = "";
        break;
      case "/news":
        title = "뉴스";
        metaDescription = "";
        break;
      case "/interest":
        title = "";
        metaDescription = "관심분야 선택";
        break;
      case "/searchdetail":
        title = "검색결과";
        metaDescription = "";
        break;
      case "/communitydetail":
        title = "커뮤니티";
        metaDescription = "";
        break;
      case "/landing":
        title = "";
        metaDescription = "카카오톡 로그인";
        break;
      case "/mypage":
        title = "";
        metaDescription = "마이페이지";
        break;
      case "/upload":
        title = "";
        metaDescription = "";
        break;
      case "/writeboard":
        title = "";
        metaDescription = "글쓰기";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/community" element={<Community />} />
      <Route path="/jobsdetail" element={<JobsDetail />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/jobs2" element={<Jobs2 />} />
      <Route path="/newsdetail" element={<NewsDetail />} />
      <Route path="/news" element={<News />} />
      <Route path="/interest" element={<Interest />} />
      <Route path="/searchdetail" element={<SearchDetail />} />
      <Route path="/communitydetail" element={<CommunityDetail />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/search" element={<Search />} />
      <Route path="/upload" element={<ImageUploadForm />} />
      <Route path="/write" element={<Writeboard />} />
      <Route path=" /jobsdetail2" element={<JobsDetail2 />} />
    </Routes>
  );
}
export default App;
