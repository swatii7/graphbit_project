import React from 'react'
import CommonHeader from '../CommonComponent/CommonHeaderSection/CommonHeader'
import Features from '../CommonComponent/FeatureComponent/Features'
import CompanyPromoBanner from '../CommonComponent/CompanyPromoBanner/CompanyPromoBanner'
import Detail from '../CommonComponent/DetailComponent/Detail'
import '../../Stylesheet/AboutUsPageStyle/AboutUs.css'
import { Col, Container, Row } from 'react-bootstrap'
import teamOneImg from '../../assets/AboutUsPageImg/Member-1_Img.webp'
import teamTwoImg from '../../assets/AboutUsPageImg/Member-2_Img.webp'
import teamThreeImg from '../../assets/AboutUsPageImg/Member-3_Img.webp'
import teamFourImg from '../../assets/AboutUsPageImg/Member-4_Img.webp'
import teamFiveImg from '../../assets/AboutUsPageImg/Member-5_Img.webp'
import teamSixImg from '../../assets/AboutUsPageImg/Member-6_Img.webp'
import teamSevenImg from '../../assets/AboutUsPageImg/Member-7_Img.webp'
import teamEightImg from '../../assets/AboutUsPageImg/Member-8_Img.webp'
import fbIcon from '../../assets/Footer/facebookIcon.webp'
import senderIcon from '../../assets/Footer/senderIcon.webp'
import twitterIcon from '../../assets/Footer/twitter.webp'

export default function AboutUs() {

  const teamMemberList = [
    {
      image: teamOneImg,
      memberName: 'Hamilton',
      designation: 'Support Engineer'
    },
    {
      image: teamTwoImg,
      memberName: 'Arizona',
      designation: 'Software Engineer'
    },
    {
      image: teamThreeImg,
      memberName: 'Arnold',
      designation: 'Web Design'
    },
    {
      image: teamFourImg,
      memberName: 'Lunia',
      designation: 'Software experts'
    },
    {
      image: teamFiveImg,
      memberName: 'Jeckmo',
      designation: 'Web Developer'
    },
    {
      image: teamSixImg,
      memberName: 'Sizar',
      designation: 'Software Engineer'
    },
    {
      image: teamSevenImg,
      memberName: 'Rodja',
      designation: 'Web Developer'
    },
    {
      image: teamEightImg,
      memberName: 'Julia',
      designation: 'Software Engineer'
    },

  ]

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
              <br className='d-block d-lg-none' />
              <span className='text-pink mx-10'>
              achivement
              </span>
              for team member hardwork
              </h2>
            </div>
            <div>
              <Row>
              {teamMemberList.map((card, index)=>
              <Col key={index} sm={12} md={4} lg={3}>
              <div className='teamCardContainer bg-blue text-center mb-30'>
                <div className='teamImgWrapper'>
                  <img src={card.image} className='teamMemberImg' />
                  <ul className='team-hover'>
                    <li className='iconWrapper'>
                      <img src={fbIcon} />
                    </li>
                    <li className='iconWrapper'>
                      <img src={senderIcon} />
                    </li>
                    <li className='iconWrapper'>
                      <img src={twitterIcon} />
                    </li>
                  </ul>
                </div>
              <div className='pt-10'>
                <h4 className='fs-24 my-10 fw-600 lh-32'>{card.memberName}</h4>
                <p>{card.designation}</p>
              </div>
              </div>
            </Col>
                  )}
              </Row>
            </div>
          </Container>
        </div>
    </section>
  )
}
