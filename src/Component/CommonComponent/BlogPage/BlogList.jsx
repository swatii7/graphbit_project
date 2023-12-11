import React from 'react'
import CommonHeader from '../CommonHeaderSection/CommonHeader'
import { Col, Container, Row } from 'react-bootstrap'
import BlogOneImg from '../../../assets/BlogPageImg/b1.webp'
import BlogTwoImg from '../../../assets/BlogPageImg/b2.webp'
import BlogThreeImg from '../../../assets/BlogPageImg/b3.webp'
import { Chat, PersonFill} from 'react-bootstrap-icons'
import CommonBlogSection from './CommonBlogSection/CommonBlogSection'

export default function BlogList() {

    const blogCard= [
        {
            Image:BlogOneImg,
            blogHeading: 'Make sure the prototype looks finished',
            para:'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the...'
        },
        {
            Image:BlogTwoImg,
            blogHeading: 'Designer have to make sure the prototype looks',
            para:'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the...'
        },
        {
            Image:BlogThreeImg,
            blogHeading: 'Creative design clients response is better',
            para:'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the...'
        },
    ]
  return (
    <section>
        <CommonHeader headerHeading='Blog' activePageName='Blog List' />
        <div className='blogListWrapper'>
            <Container>
                <Row>
                    <Col sm={12} md={8} lg={8}>
                        {blogCard.map((blog, index)=>
                        <div key={index} className='blogWrapper bg-blue'>
                        <div className='blogImage position-relative'>
                            <img src={blog.Image} />
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
                                    {blog.blogHeading}
                                    </h4>
                                </a>
                                <p className='lh-28'>{blog.para}</p>
                                <div className='blogButton'>
                                <a href='#' className='text-white'>
                                    Read More
                                    <span className='pl-5 hoverBtn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
<path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg>
                                    </span>
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                        )}
                        
                    </Col>
                    <Col sm={12} md={4} lg={4}>
                     <CommonBlogSection />
                       
                    </Col>
                </Row>

{/* pagination */}
                <div>
                <nav ariaLabel="Page navigation example">
  <ul className="pagination mt-10">
    <li className="page-item"><a className="page-link" href="#">Prev</a></li>
    <li className="page-item page-active"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item"><a className="page-link" href="#">Next</a></li>
  </ul>
</nav>
                </div>
            </Container>
        </div>
    </section>
  )
}
