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

export default function Home2() {
  return (
    <>
    <div className='homepage2Wrapper'>
        <div className='homeHeaderImgWrapper'>
        <img src={homeBgImg} />
        </div>
        <div className='position-absolute headerWrapper2'>
          <Container>
            <Row className='align-items-center'>
              <Col sm={12} md={6} lg={6}>
                <div className="wow animate__animated animate__fast animate__fadeInUp">
                  <h1 className='text-uppercase fs-70 fw-700 mb-20 font-josefin' style={{lineHeight:'90px'}}>
                    the ultimate
                    <br />
                    <span className='text-pink'>
                    METAVERSE
                    </span>
                  </h1>
                </div>
                <div className="d-flex buttonWrappper mt-15 align-items-end wow animate__animated animate__fadeInUp">
              <CustomButton
                buttonTitle="Get Started"
                className="pink-btn navButton transition-btn py-12 px-20 mt-15"
              />
              <CustomButton
                buttonTitle="White Paper"
                className="purple-btn navButton transition-btn py-12 px-20 mt-15 ml-20"
              />
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
    </>
    
  )
}
