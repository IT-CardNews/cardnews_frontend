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
        title = "";
        metaDescription = "";
        break;
      case "/jobsdetail":
        title = "";
        metaDescription = "";
        break;
      case "/jobs":
        title = "";
        metaDescription = "";
        break;
      case "/newsdetail":
        title = "";
        metaDescription = "";
        break;
      case "/news":
        title = "";
        metaDescription = "";
        break;
      case "/interest":
        title = "";
        metaDescription = "";
        break;
      case "/searchdetail":
        title = "";
        metaDescription = "";
        break;
      case "/communitydetail":
        title = "";
        metaDescription = "";
        break;
      case "/landing":
        title = "";
        metaDescription = "";
        break;
      case "/mypage":
        title = "";
        metaDescription = "";
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
      <Route path="/newsdetail" element={<NewsDetail />} />
      <Route path="/news" element={<News />} />
      <Route path="/interest" element={<Interest />} />
      <Route path="/searchdetail" element={<SearchDetail />} />
      <Route path="/communitydetail" element={<CommunityDetail />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}
export default App;
