import React from 'react'
import HomeHeader from './HomeHeader.jsx/HomeHeader';
import Features from '../CommonComponent/FeatureComponent/Features';

export default function Home1() {
  return (
    <>
     <div className='homePageWrapper position-relative'>
    <div className='bg-wrapper'>
      <img className='homeBackground' src='https://shtheme.com/demosd/graphbitwp/wp-content/themes/graphbit/img/background/bg2.jpg' />
    </div>
    <HomeHeader />
   </div>
   <Features />
    </>
  
  )
}
