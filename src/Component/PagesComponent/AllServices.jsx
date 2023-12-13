import React from 'react'
import CommonHeader from '../CommonComponent/CommonHeaderSection/CommonHeader'
import BlockchainComponent from '../CommonComponent/CustomBlockchainComponent/BlockchainComponent'
import { Container, Row, Col } from 'react-bootstrap'
import CustomButton from '../CommonComponent/CustomButton/CustomButton'
import { AnimatedOnScroll } from 'react-animated-css-onscroll'
import Card from '../CommonComponent/CardComponent/Card'
import nftsProductImg from '../../assets/BlockchainLogo/nftImg.webp'
import stackingImg from '../../assets/BlockchainLogo/stacking-image.webp'
import launchpadImg from '../../assets/BlockchainLogo/launchpadimg.webp'
import ecommerceImg from '../../assets/BlockchainLogo/ecommerce-image.webp'
import tokenImg from '../../assets/BlockchainLogo/TokenImage.webp'
import Wallet from '../CommonComponent/WalletComponent/Wallet'
import ScrollToTop from 'react-scroll-to-top'

export default function AllServices() {
  return (
    <div>
      <ScrollToTop smooth color="#fff" />
      <CommonHeader headerHeading='All Services' activePageName='All Services' />
      <BlockchainComponent />
      <div className='CardServiceWrapper'>
    <Container>
    <Row>
        <Col sm={12} md={6} lg={4}>
          <div className='bg-blue mb-30 cardStyle serviceCard'>
            <h2 className='fs-44 fw-800 font-josefin mb-15' style={{lineHeight:'46px'}}>
              Best 
              <span className='text-pink ml-20'>services</span>
              <br />
              for clients
            </h2>
            <p className='mb-15'>
            Our consultants opt in to the projects they genuinely want to work on.
            </p>
            <CustomButton
                buttonTitle="All Services"
                className="pink-btn navButton transition-btn py-12 px-20 mt-15 contactBtn"
              />
          </div>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <AnimatedOnScroll  animationIn="fadeInUp">
          <div className='mb-30 cardStyle serviceCard customServiceCard'>
            <Card
            image={nftsProductImg}
            heading="Nfts Product"
            para="Aspernatur sit adipisci quaerat unde at neque Redug Lagre dolor sit amet consectetu. independent agency, free from the."
            className='marginOnCard'
            headingClass='fs-24 fw-500 lh-32'
             />
          </div>

          </AnimatedOnScroll>
        </Col>
        <Col sm={12} md={6} lg={4}>
        <AnimatedOnScroll  animationIn="fadeInUp">
          <div className='mb-30 bg-blue cardStyle serviceCard customServiceCard'>
            <Card
            image={stackingImg}
            heading="Stacking"
            para="Aspernatur sit adipisci quaerat unde at neque Redug Lagre dolor sit amet consectetu. independent agency, free from the."
            className='marginOnCard'
            headingClass='fs-24 fw-500 lh-32'
             />
          </div>

          </AnimatedOnScroll>
        </Col>
        <Col sm={12} md={6} lg={4}>
        <AnimatedOnScroll  animationIn="fadeInUp">
          <div className='mb-30 cardStyle serviceCard customServiceCard'>
            <Card
            image={launchpadImg}
            heading="Launchpad"
            para="Aspernatur sit adipisci quaerat unde at neque Redug Lagre dolor sit amet consectetu. independent agency, free from the."
            className='marginOnCard'
            headingClass='fs-24 fw-500 lh-32'
             />
          </div>

          </AnimatedOnScroll>
        </Col>
        <Col sm={12} md={6} lg={4}>
        <AnimatedOnScroll  animationIn="fadeInUp">
          <div className='mb-30 bg-blue cardStyle serviceCard customServiceCard'>
            <Card
            image={ecommerceImg}
            heading="Ecommerce Solutions"
            para="Aspernatur sit adipisci quaerat unde at neque Redug Lagre dolor sit amet consectetu. independent agency, free from the."
            className='marginOnCard'
            headingClass='fs-24 fw-500 lh-32'
             />
          </div>

          </AnimatedOnScroll>
        </Col>
        <Col sm={12} md={6} lg={4}>
        <AnimatedOnScroll  animationIn="fadeInUp">
          <div className='mb-30 cardStyle serviceCard customServiceCard'>
            <Card
            image={tokenImg}
            heading="Token Release"
            para="Aspernatur sit adipisci quaerat unde at neque Redug Lagre dolor sit amet consectetu. independent agency, free from the."
            className='marginOnCard'
            headingClass='fs-24 fw-500 lh-32'
             />
          </div>

          </AnimatedOnScroll>
        </Col>
        
      </Row>
    </Container>

    </div>
    <Wallet />
    </div>
  )
}
