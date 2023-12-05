import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home1 from "./Component/HomePage/Home1";
import Home2 from "./Component/HomePage/Home2";
import "./Stylesheet/CommonComponentStyle/Blockchain/Blockchain.css";
import "./Stylesheet/CommonComponentStyle/Detail/Detail.css";
import "./Stylesheet/Footer/Footer.css";
import "./Stylesheet/Home/Header/Header.css";
import "./Stylesheet/Navbar/Navbar.css";

function App() {
  return (
    <Routes>
      <Route index element={<Home1 />} />
      <Route path="/home2" element={<Home2 />} />
    </Routes>
  );
}

export default App;
