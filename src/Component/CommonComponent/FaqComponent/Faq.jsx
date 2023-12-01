import React, { useState } from 'react'
import { Col, Container, Row, ListGroup } from 'react-bootstrap'

export default function Faq() {

    const [isTabActive, setIsTabActive] = useState(false)

  return (
    <div className='faqWrapper'>
      <Container>
      <div className='text-center fs-17 fw-700 mb-10 pb-30' style={{letterSpacing: '1px'}}>
        <p>IMPORTANT FAQ</p>
        <h2 className='fs-56 fw-700 font-josefin lh-64 mb-15'>
        Graphbit token fundamental
        <br />
        <span className='text-pink'>
        Important
        </span>
        question
        </h2>
      </div>
      <Row>
        <Col sm={12} md={4} lg={4}>
            <div>
            <ListGroup as="ul" className='mb-40'>
      <ListGroup.Item as="li" active>
      General Questions
      </ListGroup.Item>
      <ListGroup.Item as="li" className='text-white'>Token Sale</ListGroup.Item>
      <ListGroup.Item as="li" className='text-white'>Campaigns & Rewards</ListGroup.Item>
    </ListGroup>
            </div>
        </Col>
        <Col sm={12} md={8} lg={8}></Col>
      </Row>
      </Container>
     
    </div>
  )
}
