import React from 'react'
import Appbar from '../CommonComponent/Appbar/Appbar'

export default function Layout({children}) {
  return (
    <>
    <Appbar />
<main>
    {children}
</main>
      
    </>
  )
}
