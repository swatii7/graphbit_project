import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home1 from "./Component/HomePage/Home1";
import Home2 from "./Component/HomePage/Home2";
import "./Stylesheet/CommonComponentStyle/Blockchain/Blockchain.css";
import "./Stylesheet/CommonComponentStyle/Detail/Detail.css";
import "./Stylesheet/Footer/Footer.css";
import "./Stylesheet/Home/Header/Header.css";
import "./Stylesheet/Navbar/Navbar.css";
import AboutUs from "./Component/AboutUsPage/AboutUs";

function App() {
  return (
    <Routes>
      <Route index element={<Home1 />} />
      <Route path="/home2" element={<Home2 />} />
      <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
