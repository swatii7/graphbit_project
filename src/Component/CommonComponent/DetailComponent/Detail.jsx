import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import headerImg from '../../../assets/Header/headerImg.webp'

export default function Detail() {
  return (
    <div className='detailWrapper text-center'>
      <Container>
        <div className='pb-40'>
            <p className='text-uppercase fw-700 fs-17 mb-10' style={{letterSpacing:'1px'}}>graphbit information</p>
            <h2 className='fw-700 fs-56 font-josefin'>
            Graphbit token supply and
            <br />
            <span className='text-pink mr-20'>
                blockchain
            </span>
            information
            </h2>
        </div>
        <Row>
            <Col lg={6} md={6} sm={12}>
                <div className='infoWrapper text-start'>
                    <h5 className='fs-22 fw-600 pl-10'>
                    Supply & Price Information
                    </h5>
                </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
                <img src={headerImg} />
            </Col>
        </Row>
      </Container>
    </div>
  )
}
