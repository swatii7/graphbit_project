import React from 'react'
import homeBgImg from '../../assets/Home2Page/home2bg.webp'
import { Col, Container, Row } from 'react-bootstrap'
import '../../Stylesheet/Home/Header/Header.css'
import CustomButton from '../CommonComponent/CustomButton/CustomButton'
import SwapForm from '../CommonComponent/FormComponent/SwapForm'
import BlockchainComponent from '../CommonComponent/CustomBlockchainComponent/BlockchainComponent'
import Features from '../CommonComponent/FeatureComponent/Features'
import Detail from '../CommonComponent/DetailComponent/Detail'
import PurchaseToken from '../CommonComponent/PurchaseTokenSection/PurchaseToken'
import { AnimatedOnScroll } from 'react-animated-css-onscroll'
import Card from '../CommonComponent/CardComponent/Card'
import nftsProductImg from "../../assets/BlockchainLogo/nftImg.webp"
import stackingImg from "../../assets/BlockchainLogo/stacking-image.webp"
import launchpadImg from "../../assets/BlockchainLogo/launchpadimg.webp"
import ecommerceImg from "../../assets/BlockchainLogo/ecommerce-image.webp"
import tokenImg from "../../assets/BlockchainLogo/TokenImage.webp"
import InvestmentPlatform from '../CommonComponent/InvestmentPlatformComponent/InvestmentPlatform'
import Wallet from '../CommonComponent/WalletComponent/Wallet'
import ScrollToTop from 'react-scroll-to-top'

export default function Home2() {
  return (
    <>
    <ScrollToTop smooth color="#fff" />
    <div className='homepage2Wrapper'>
        <div className='homeHeaderImgWrapper'>
        <img src={homeBgImg} />
        </div>
        <div className='position-absolute headerWrapper2'>
          <Container>
            <Row className='align-items-center'>
              <Col sm={12} md={6} lg={6}>
                <div className="wow animate__animated animate__fast animate__fadeInUp">
                  <h1 className='text-uppercase metaverseHeading fs-70 fw-700 mb-20 font-josefin' style={{lineHeight:'90px'}}>
                    the ultimate
                    <br />
                    <span className='text-pink'>
                    METAVERSE
                    </span>
                  </h1>
                </div>
                <div className="d-flex buttonWrappper mt-15 align-items-end wow animate__animated animate__fadeInUp">
                 
                    <div className='btnDiv'>
                    <CustomButton
                buttonTitle="Get Started"
                className="pink-btn navButton transition-btn py-12 px-20 mt-15"
              />
                    </div>
                    <div className='btnDiv'>
                    <CustomButton
                buttonTitle="Contact Us"
                className="purple-btn navButton transition-btn py-12 px-20 mt-15 ml-20 contactBtn"
              />
                    </div>

            </div>
              </Col>
              <Col sm={12} md={6} lg={6}>
                <SwapForm />
              </Col>
            </Row>
          </Container>
        </div>
      
    </div>
    <BlockchainComponent />
    <Features />
    <Detail />
    <PurchaseToken />
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
    
    <InvestmentPlatform />
    <Wallet />
    </>
    
  )
}
