import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logoOne from '../../../assets/BlockchainLogo/logo-1.webp'
import logoTwo from '../../../assets/BlockchainLogo/logo-2.webp'
import logoThree from '../../../assets/BlockchainLogo/logo-3.webp'
import logoFour from '../../../assets/BlockchainLogo/logo-4.webp'
import CustomButton from '../CustomButton/CustomButton'


export default function BlockchainComponent() {
  return (
    <div className='bg-darkBlue blockchainWrapper'>
      <Container>
        <Row>
            <Col lg={6} md={6} sm={12}>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <div className='servicesWrapper bg-blue'>
                            <div className='imgWrapper'>
                                <img src={logoOne} />
                            </div>
                            <div>
                                <h4 className='fs-22 pb-10 fw-700'>
                                Latest Technology
                                </h4>
                                <p className='fs-16 mb-15' style={{color:'#ddd'}}>
                                Aspernatur sit adipisci neque Redug Lagre dolor. consultants opt in to the projects
                                </p>
                            </div>
                        </div>
                        <div className='servicesWrapper bg-blue'>
                            <div className='imgWrapper'>
                                <img src={logoTwo} />
                            </div>
                            <div>
                                <h4 className='fs-22 pb-10 fw-700'>
                                Certik Certified
                                </h4>
                                <p className='fs-16 mb-15' style={{color:'#ddd'}}>
                                Aspernatur sit adipisci neque Redug Lagre dolor. consultants opt in to the projects
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                    <div className='servicesWrapper bg-blue mt-100'>
                            <div className='imgWrapper'>
                                <img src={logoThree} />
                            </div>
                            <div>
                                <h4 className='fs-22 pb-10 fw-700'>
                                Minning Platform
                                </h4>
                                <p className='fs-16 mb-15' style={{color:'#ddd'}}>
                                Aspernatur sit adipisci neque Redug Lagre dolor. consultants opt in to the projects
                                </p>
                            </div>
                        </div>
                        <div className='servicesWrapper bg-blue'>
                            <div className='imgWrapper'>
                                <img src={logoFour} />
                            </div>
                            <div>
                                <h4 className='fs-22 pb-10 fw-700'>
                                Metaverse Blockchain
                                </h4>
                                <p className='fs-16 mb-15' style={{color:'#ddd'}}>
                                Aspernatur sit adipisci neque Redug Lagre dolor. consultants opt in to the projects
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col lg={6} md={6} sm={12}>
                <div className='ml-60' style={{marginTop:'184px'}}>
                    <div className='fw-700 fs-17 mb-10 text-uppercase' style={{letterSpacing:'1px'}}>ultimate Metaverse</div>
                    <h2 className='fs-56 font-josefin fw-700 mb-15' style={{lineHeight:'64px'}}>
                        <span className='text-pink'>
                            Blockchain
                        </span>
                        <br />
                        provide you best services
                    </h2>
                    <p className='fs-18'>
                    Our Blockchain opt in to the projects they genuinely want to work on.maintains the amount of lines. When replacing a selection. help agencies to define. define their new business objectives and then Our consultants opt in to the projects they genuinely want to work on. maintains the amount of lines. When replacing a selection. help agencies to define. define their new business objectives and then business objectives and then Our consultants
                    </p>
                    <CustomButton buttonTitle='Learn More'
         className="pink-btn navButton transition-btn py-12 px-20 mt-15" />
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}
