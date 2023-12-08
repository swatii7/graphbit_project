import React from 'react'
import CommonHeader from '../CommonHeaderSection/CommonHeader'
import { Col, Container, Row } from 'react-bootstrap'
import BlogOneImg from '../../../assets/BlogPageImg/b1.webp'
import { ArrowRightShort, Chat, PersonFill } from 'react-bootstrap-icons'

export default function BlogList() {

    const blogCard= [
        {
            Image:BlogOneImg,
            blogHeading: 'Make sure the prototype looks finished',
            para:'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the...'
        }
    ]
  return (
    <section>
        <CommonHeader headerHeading='Blog' activePageName='Blog List' />
        <div className='blogListWrapper'>
            <Container>
                <Row>
                    <Col sm={12} md={8} lg={8}>
                        <div className='blogWrapper bg-blue'>
                            <div className='blogImage position-relative'>
                                <img src={BlogOneImg} />
                                <div className='blog-item-date'>
                                    <span className='fs-13 fw-600'>March 2, 2023</span>
                                </div>
                            </div>
                            <div className='blogContent'>
                                <div className='mb-10'>
                                    <span className='fs-16 fw-400 pr-15'>
                                        <PersonFill className='text-pink mr-7' />
                                        <a href='#' style={{color:'#ddd', textDecoration:'none'}}>Admin</a>
                                    </span>
                                    <span className='fs-16 fw-400 pr-10'>
                                        <Chat className='text-pink mr-7' />
                                        1 Comment
                                    </span>
                                </div>
                                <div>
                                    <a href='' className='text-white blogHeading'>
                                        <h4 className='fs-24 lh-34 fw-700 mb-15'>
                                        Make sure the prototype looks finished
                                        </h4>
                                    </a>
                                    <p className='lh-28'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the...</p>
                                    <a href='#' className='blogButton text-white'>
                                        Read More
                                        <ArrowRightShort className='text-white' style={{height:'30px'}} />
                                        </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={4} lg={4}></Col>
                </Row>
            </Container>
        </div>
    </section>
  )
}
