import { useState } from 'react'
import './App.css'
import Header from './Component/CommonComponent/Header/Header'
import { Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Header />
    </>
  //  <Routes>
  //   <Route index element={<Home1 />} />
  //  </Routes>
  )
}

export default App
