import React from 'react'
import Appbar from '../CommonComponent/Header/Header'

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
