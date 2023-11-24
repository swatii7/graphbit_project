import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import headerImage from '../../../assets/Header/headerImg.webp'
import CustomButton from '../../CommonComponent/CustomButton/CustomButton'

export default function HomeHeader() {
  return (
    <header className="appbar stick position-absolute ">
    <Container className='px-15 mt-100 headerContainer'>
    <Row className="d-flex">
      <Col sm={12} md={6} lg={6}>
      <div className='mt-20'>
<div>
<h1 className='font-josefin fs-68 fw-700 lh-76'>The blockchain 
<br />
  <span className='text-pink fw-800 lh-76'>technology </span>
  for a brighter tomorrow 
</h1>
</div>
      </div>
      <div className='d-flex'>
        <CustomButton buttonTitle='Get Started'
         className="pink-btn navButton transition-btn py-12 px-20" />
        <CustomButton buttonTitle='White Paper'
        className="purple-btn navButton transition-btn py-12 px-20" />
      </div>
      </Col>
      <Col sm={12} md={6} lg={6}>
      <img src={headerImage} style={{maxWidth:'540px'}} className='img-fluid homeHeaderImage' />
      </Col>
    </Row>
    </Container>
    </header>
  )
}
