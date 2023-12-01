import React from 'react'
import '../../../Stylesheet/CommonComponentStyle/WalletComponentStyle/Wallet.css'
import { Col, Container, Row } from 'react-bootstrap'
import walletImg from '../../../assets/BannerImg/walletImg.webp'
import CustomButton from '../CustomButton/CustomButton'

export default function Wallet() {
  return (
    <div className='walletWrapper'>
      <Container>
        <Row>
            <Col sm={12} md={6} lg={6}>
                <div>
                    <p className='fs-17 fw-700 mb-10' style={{letterSpacing:'1px'}}>
                    DOWNLOAD WALLET
                    </p>
                    <h2 className='fs-56 fw-700 mb-15 lh-64 font-josefin walletHeading'>
                    Wallet
                    <br className='d-none d-md-block' />
                    <span className='text-pink mx-10'>
                    available
                    </span>
                    <br className='d-md-block d-none' />
                    play store & App store
                    </h2>
                    <p className='fs-18' style={{lineHeight:'28px'}}>
                    The phrasal sequence of the Lorem Ipsum text is now so and that many the phrase when found, an alarm can be raised. phrasal sequence of the Lorem Ipsum text is now so and that many the phrase when found, an alarm can be raised
                    </p>
                    <CustomButton buttonTitle='Play Store'
         className="pink-btn navButton transition-btn py-12 px-20 mt-15" />
        <CustomButton buttonTitle='App Store'
        className="purple-btn navButton transition-btn py-12 px-20 mt-15 ml-20" />
                    
                </div>
            </Col>
            <Col sm={12} md={6} lg={6} className='walletImgWrapper'>
                <img src={walletImg} />
            </Col>
        </Row>
      </Container>
    </div>
  )
}
