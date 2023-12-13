import React from 'react'
import CommonHeader from '../CommonComponent/CommonHeaderSection/CommonHeader'
import '../../Stylesheet/ContactUsPage/Contact.css'
import { Col, Container, Row, InputGroup, Form } from 'react-bootstrap'
import { EnvelopeFill, MapFill } from 'react-bootstrap-icons'
import fbIcon from '../../assets/Footer/facebookIcon.webp'
import senderIcon from '../../assets/Footer/senderIcon.webp'
import twitterIcon from '../../assets/Footer/twitter.webp'
import freepikIcon from '../../assets/Footer/freepik.webp'
import mediaIcon from '../../assets/Footer/midea5.webp'
import CustomButton from '../CommonComponent/CustomButton/CustomButton'
import ScrollToTop from 'react-scroll-to-top'

export default function ContactPage() {

    const mediaIconArr = [fbIcon, senderIcon, twitterIcon, freepikIcon, mediaIcon]

  return (
    <div>
        <ScrollToTop smooth color="#fff" />
      <CommonHeader headerHeading='Contact Us' activePageName='Contact Us' />
      <div className='contactWrapper'>
        <Container>
            <Row>
                <Col sm={12} md={12} lg={6}>
                    <div className='contactDetailWrapper bg-blue'>
                        <h4 className='fs-24 lh-32 fw-700 mb-15'>
                        Request a contact us
                        </h4>
                        <p>
                        Revail The universal acceptance of building has given a tremendous opportunity for merchants to do crossborder transactions instantly and at reduced cost.
                        </p>
                        <div className='mt-20 mb-30 d-block'>
                            <a href="https://www.google.com/maps/search/Road-7+old+Street,+Torronto/@43.72009,-79.5525799,12z/data=!3m1!4b1" className='mb-10 text-decoration-none d-block'>
                                <MapFill className='text-pink fs-18' />
                                <span className='pl-20 text-white'>
                                Road-7 old Street, Torronto
                                </span>

                            </a>

                            <a href="mailto:" className='mb-10 text-decoration-none'>
                                <EnvelopeFill className='text-pink fs-18' />
                                <span className='pl-20 text-white'>
                                info@coinnscn3.com
                                </span>

                            </a>
                        </div>
                        <div className="mt-30 d-flex justify-content-start">
                            {mediaIconArr.map((img, index)=>
                             <div key={index} className="iconWrapper mr-10">
                             <img
                               src={img}
                               className="wow flipInY"
                               data-wow-duration="0.6s"
                               data-wow-delay="0.3s"
                             />
                           </div>
                            )}
         
            </div>
                    </div>
                </Col>
                <Col sm={12} md={12} lg={6}>
                    <div>
                    <Row>
                    <Col sm={12} md={6} lg={6}>
                      <InputGroup className="mb-30 inputFieldWrapper">
                        <Form.Control
                          aria-label="First name"
                          placeholder="First Name"
                        //   className='contactForm'
                        />
                      </InputGroup>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                      <InputGroup className="mb-30 inputFieldWrapper">
                        <Form.Control
                          aria-label="email address"
                          placeholder="Email"
                        //   className='contactForm'
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                  <div>
                  <InputGroup className="mb-30 inputFieldWrapper">
                        <Form.Control
                          aria-label="subject"
                          placeholder="Subject"
                        //   className='contactForm'
                        />
                      </InputGroup>
                    <Form.Group
                      className="mb-3 inputFieldWrapper"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Control as="textarea" rows={3} placeholder="Write a comment..." className="commentArea" />
                    </Form.Group>
                  </div>
                  <CustomButton buttonTitle='Submit' 
                  className='pink-btn navButton transition-btn py-12 px-20 mt-15 text-white fs-18 fw-bold'
                   />
                    </div>
                </Col>
            </Row>
        </Container>
      </div>
    </div>
  )
}
