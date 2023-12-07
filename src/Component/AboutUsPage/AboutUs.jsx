import React from 'react'
import CommonHeader from '../CommonComponent/CommonHeaderSection/CommonHeader'
import Features from '../CommonComponent/FeatureComponent/Features'
import CompanyPromoBanner from '../CommonComponent/CompanyPromoBanner/CompanyPromoBanner'
import Detail from '../CommonComponent/DetailComponent/Detail'
import '../../Stylesheet/AboutUsPageStyle/AboutUs.css'
import { Col, Container, Row } from 'react-bootstrap'
import teamOneImg from '../../assets/AboutUsPageImg/Member-1_Img.webp'

export default function AboutUs() {
  return (
    <section>
        <CommonHeader headerHeading='About us' activePageName="About us" />
        <Features />
        <CompanyPromoBanner />
        <Detail />
        <div className='expertTeamWrapper'>
          <Container>
            <div className='pb-30 text-center'>
              <p className='text-uppercase fw-700 fs-17 mb-10' style={{letterSpacing: '1px'}}>
                our expert
              </p>
              <h2 className='fs-56 lh-64 font-josefin fw-700 teamExpertHeading'>
              Graphbit great
              <span className='text-pink mx-10'>
              achivement
              </span>
              for team member hardwork
              </h2>
            </div>
            <div>
              <Row>
                <Col sm={12} md={4} lg={3}>
                  <div className='teamCardContainer bg-blue text-center mb-30'>
                    <div className='teamImgWrapper'>
                      <img src={teamOneImg} className='teamMemberImg' />
                    </div>
                  </div>
                </Col>
                <Col sm={12} md={4} lg={3}></Col>
                <Col sm={12} md={4} lg={3}></Col>
                <Col sm={12} md={4} lg={3}></Col>
                <Col sm={12} md={4} lg={3}></Col>
                <Col sm={12} md={4} lg={3}></Col>
                <Col sm={12} md={4} lg={3}></Col>
                <Col sm={12} md={4} lg={3}></Col>
              </Row>
            </div>
          </Container>
        </div>
    </section>
  )
}
