import React from 'react'
import CommonHeader from '../CommonHeaderSection/CommonHeader'
import { Col, Container, Row } from 'react-bootstrap'

export default function BlogGrid() {
  return (
    <section>
      <CommonHeader
      headerHeading='Blog Grid'
      activePageName='Blog Grid' />
      <div className='blogGrid'>
        <Container>
          <Row>
            <Col sm={12} md={6} lg={6}>
              <div className='gridBlog mb-30 bg-blue'>

              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}
