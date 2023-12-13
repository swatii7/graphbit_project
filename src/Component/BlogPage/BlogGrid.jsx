import React from 'react'
import CommonHeader from '../CommonComponent/CommonHeaderSection/CommonHeader'
import { Col, Container, Row } from 'react-bootstrap'
import cardOne from '../../assets/BlogPageImg/b1.webp'
import { PersonFill, Chat } from 'react-bootstrap-icons'
import cardTwo from '../../assets/BlogPageImg/b2.webp'
import cardThree from '../../assets/BlogPageImg/b3.webp'
import cardFour from '../../assets/BlogPageImg/b4.webp'
import cardFive from '../../assets/BlogPageImg/b5.webp'
import cardSix from '../../assets/BlogPageImg/b6.webp'
import ScrollToTop from 'react-scroll-to-top'


export default function BlogGrid() {

  const gridColsContent= [
    {
      Image:cardOne,
      heading:'Make sure the prototype looks finished'
    },
    {
      Image:cardTwo,
      heading:'Designer have to make sure the prototype looks'
    },
    {
      Image:cardThree,
      heading:'Creative design clients response is better'
    },
    {
      Image:cardFour,
      heading:'Make sure the prototype looks finished'
    },
    {
      Image:cardFive,
      heading:'Designer have to make sure the prototype looks'
    },
    {
      Image:cardSix,
      heading:'Creative design clients response is better'
    },


  ]

  return (
    <section>
      <ScrollToTop smooth color="#fff" />
      <CommonHeader
      headerHeading='Blog Grid'
      activePageName='Blog Grid' />
      <div className='blogGrid'>
        <Container>
          <Row>
            {gridColsContent.map((item, index)=>
              <Col key={index} sm={12} md={6} lg={6}>
              <div className='gridBlog mb-30 bg-blue d-flex'>
              <div className='leftImageWrapper'>
              <img src={item.Image} className='cardGrid' />
                    <div className='blog-grid-date'>
                                <span className='fs-13 fw-600'>March 2, 2023</span>
                            </div>
              </div>

              <div className='blogContent rightImageWrapper'>
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
                                   {item.heading}
                                    </h4>
                                </a>
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
            </Col>
            )}
          
          </Row>
          <div>
                <nav ariaLabel="Page navigation example">
  <ul className="pagination mt-10">
    <li className="page-item"><a className="page-link" href="#">Prev</a></li>
    <li className="page-item page-active"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">Next</a></li>
  </ul>
</nav>
                </div>
        </Container>
      </div>
    </section>
  )
}
