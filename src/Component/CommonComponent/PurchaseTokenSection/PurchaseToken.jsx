import React from 'react'
import '../../../Stylesheet/CommonComponentStyle/TokenPurchaseSection/TokenPurchase.css'
import { Col, Container, Row } from 'react-bootstrap'

export default function PurchaseToken() {
  return (
    <div className='purchaseTokenWrapper'>
        <Container>
            <Row className='align-items-baseline'>
                <Col sm={12} md={8} lg={8}>
                    <div className='mr-80'>
                        <p className='text-uppercase fs-17 fw-700 mb-10' style={{letterSpacing:'1px'}}>token ico pre-sale</p>
                        <h2 className='fs-56 lh-64 fw-700 font-josefin mb-15 '>
                        Investor first choice to buy
                        <span className='text-pink ml-20'>
                        token pre-sale
                        </span>
                        </h2>
                        <p className='fs-18 lh-28'>
                        Blockchain opt in to the projects they genuinely want to work on.maintains the amount of lines. When replacing a selection. help agencies to define. define their new business objectives and then Our consultants opt in to the projects they genuinely want to work on.
                        </p>
                    </div>
                </Col>
                <Col sm={12} md={4} lg={4}>
                    <div className='bg-blue text-center d-inline-grid purchaseTimingContainer'>
                        <div className='pt-20 pb-30 tokenTiming'>
                            <div className='text-uppercase float-start'>
                                <span className='fs-30 fw-700 d-block single-count'>-111</span>
                                days
                            </div>
                            <div className='text-uppercase float-start'>
                                <span className='fs-30 fw-700 d-block single-count'>
                                    -18
                                </span>
                                Hours
                            </div>
                            <div className='text-uppercase float-start'>
                                <span className='fs-30 fw-700 d-block single-count'>
                                    -17
                                </span>
                                Min
                            </div>
                            <div className='text-uppercase float-start'>
                                <span className='fs-30 fw-700 d-block single-count'>
                                    -26
                                </span>
                                Sec
                            </div>

                        </div>
                        <div className='target d-flex'>
                            <div className='w-half mb-15'>
                                <span className='text-uppercase fs-12 pb-5 position-relative presaleTarget'>
                                    Pre-sale
                                </span>
                            </div>
                            <div className='w-half mb-15'>
                            <span className='text-uppercase fs-12 pb-5 position-relative softCapTarget'>
                                    soft cap
                                </span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
