import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home1 from "./Component/HomePage/Home1";
import Home2 from "./Component/HomePage/Home2";
import "./Stylesheet/CommonComponentStyle/Blockchain/Blockchain.css";
import "./Stylesheet/CommonComponentStyle/Detail/Detail.css";
import "./Stylesheet/Footer/Footer.css";
import "./Stylesheet/Home/Header/Header.css";
import "./Stylesheet/Navbar/Navbar.css";
import "./Stylesheet/BlogPageStyle/Blog.css"
import AboutUs from "./Component/AboutUsPage/AboutUs";
import CoinInformation from "./Component/PagesComponent/CoinInformation";
import CoinStacking from "./Component/PagesComponent/CoinStacking";
import AllServices from "./Component/PagesComponent/AllServices";
import TokenIco from "./Component/PagesComponent/TokenIco";
import FaqPage from "./Component/PagesComponent/FaqPage";
import BlogList from "./Component/BlogPage/BlogList";
import BlogGrid from "./Component/BlogPage/BlogGrid";
import BlogDetails from "./Component/BlogPage/BlogDetails"
import ContactPage from "./Component/ContactPage/ContactPage";

function App() {
  return (
    <Routes>
      <Route index element={<Home1 />} />
      <Route path="/home2" element={<Home2 />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/coinInformation" element={<CoinInformation />} />
      <Route path="/coinStacking" element={<CoinStacking />} />
      <Route path="/services" element={<AllServices />} />
      <Route path="/tokenIco" element={<TokenIco />} />
      <Route path="/faqs" element={<FaqPage />} />
      <Route path="/blogList" element={<BlogList />} />
      <Route path="/blogGrid" element={<BlogGrid />} />
      <Route path="/blogDetail" element={<BlogDetails />} />
      <Route path="/contactUs" element={<ContactPage />} />
    </Routes>
  );
}

export default App;

