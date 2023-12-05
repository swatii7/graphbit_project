import React from 'react'
import Appbar from '../CommonComponent/Appbar/Appbar'
import Footer from '../CommonComponent/Footer/Footer'

export default function Layout({children}) {
  return (
    <>
    <Appbar />
<main>
    {children}
</main>
      <Footer />
    </>
  )
}
