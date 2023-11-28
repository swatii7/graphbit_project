import { useState } from 'react'
import './App.css'
import './Stylesheet/Home/Header/Header.css'
import './Stylesheet/Navbar/Navbar.css'
import './Stylesheet/CommonComponentStyle/Blockchain/Blockchain.css'
import './Stylesheet/CommonComponentStyle/Detail/Detail.css'
import { Route, Routes } from 'react-router-dom'
import Home1 from './Component/HomePage/Home1'


function App() {
  const [count, setCount] = useState(0)

  return (
   
   <Routes>
    <Route index element={<Home1 />} />
   </Routes>
  )
}

export default App
