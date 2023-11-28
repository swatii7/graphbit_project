import React from 'react'
import { Col, Container } from 'react-bootstrap'
import bannerImgOne from '../../../assets/BannerImg/image-1.webp'
import bannerImgTwo from '../../../assets/BannerImg/image-2.webp'
import bannerImgThree from '../../../assets/BannerImg/image-3.webp'
import bannerImgFour from '../../../assets/BannerImg/image-4.webp'
import bannerImgFive from '../../../assets/BannerImg/image-5.webp'

export default function CompanyPromoBanner() {
  return (
    <div className='bg-darkBlue'>
        <Container>
        <div className='d-flex flex-wrap bg-blue' style={{padding:'20px', borderRadius:'4px'}}>
<div className='bannerImgWrapper'>
    <img src={bannerImgOne} className='bannerImages' />
</div>
<div className='bannerImgWrapper'>
    <img src={bannerImgTwo} className='bannerImages' />
</div>
<div className='bannerImgWrapper'>
    <img src={bannerImgThree} className='bannerImages' />
</div>
<div className='bannerImgWrapper'>
    <img src={bannerImgFour} className='bannerImages' />
</div>
<div className='bannerImgWrapper'>
    <img src={bannerImgFive} className='bannerImages' />
</div>
        </div>
        </Container>

    </div>
  )
}
