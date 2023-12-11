import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Search, Tags } from 'react-bootstrap-icons'
import cardOne from '../../../../assets/BlogPageImg/b1.webp'
import cardTwo from '../../../../assets/BlogPageImg/b2.webp'
import cardThree from '../../../../assets/BlogPageImg/b3.webp'
import cardFour from '../../../../assets/BlogPageImg/b4.webp'
import CustomPinkButton from '../../CustomButton/CustomPinkButton'


export default function CommonBlogSection() {


    const blogLeftCard= [
        {
            image: cardOne,
            para: 'Make sure the prototype looks finished by',
            date:'March 2, 2023'
        },
        {
            image: cardTwo,
            para: 'Designer have to make sure the prototype',
            date:'March 2, 2023'
        },
        {
            image: cardThree,
            para: 'Creative design clients response is better',
            date:'March 2, 2023'
        },
        {
            image: cardFour,
            para: 'Make sure the prototype looks finished by',
            date:'March 2, 2023'
        },

    ]

    const tagButtonArr=['Base', 'Bitcoin', 'Coin', 'Ethereum', 'Lite', 'Ripple', 'Skrill']
    

  return (
    <div>
        {/* search input div */}
         <div className='searchWrapper bg-blue mb-30'>
                        <div className='searchField d-flex'>
                            <input type='text' placeholder='Search' className='searchClass' />
                            <div className='searchIcon'>
                            <Search />
                            </div>
                        </div>
                        </div>

                        {/* post Div */}

                        <div className='searchWrapper bg-blue mb-30'>
                                <h4 className='fs-22 fw-700 mb-15'>
                                Recent Posts
                                </h4>
                                <div>
                                    {blogLeftCard.map((blogCard, index)=>
                                    <Row key={index} className='py-15'>
                                    <Col sm={4}>
                                        <a href='/blogDetail'>
                                            <img src={blogCard.image} className='blogCardImg' />
                                        </a>
                                    </Col>
                                    <Col sm={8}>
                                        <p className='mb-2 fw-600 blogCardContent'>
                                        {blogCard.para}
                                        </p>
                                        <span className='fs-14 fw-600 text-white'>
                                        {blogCard.date}
                                        </span>
                                    </Col>
                                </Row>
                                    )}
                                    

                                </div>
                        </div>

                        {/* categories div */}
                        <div className='searchWrapper bg-blue mb-30'>
                        <h4 className='fs-22 fw-700 mb-15'>
                                Categories
                                </h4>
                                <div>
                                    <ul>
                                        <li className='d-flex justify-content-between'>
                                            <div>
                                                <p className='fw-600 fs-16'>Bitcoin</p>
                                                </div>
                                                <div>
                                                    <p>(1)</p>
                                                </div>
                                        </li>
                                        <li className='d-flex justify-content-between'>
                                            <div>
                                                <p className='fw-600 fs-16'>Ethereum</p>
                                                </div>
                                                <div>
                                                    <p>(2)</p>
                                                </div>
                                        </li>
                                        <li className='d-flex justify-content-between'>
                                            <div>
                                                <p className='fw-600 fs-16'>Litecoin</p>
                                                </div>
                                                <div>
                                                    <p>(2)</p>
                                                </div>
                                        </li>
                                        <li className='d-flex justify-content-between'>
                                            <div>
                                                <p className='fw-600 fs-16'>Ripple</p>
                                                </div>
                                                <div>
                                                    <p>(2)</p>
                                                </div>
                                        </li>
                                        <li className='d-flex justify-content-between'>
                                            <div>
                                                <p className='fw-600 fs-16'>Skill</p>
                                                </div>
                                                <div>
                                                    <p>(1)</p>
                                                </div>
                                        </li>
                                    </ul>
                                </div>

                        </div>

                        {/* tags div */}
                        <div className='searchWrapper bg-blue mb-30'>
                        <h4 className='fs-22 fw-700 mb-15'>
                                Tags
                                </h4>
                                <div>
                                    {tagButtonArr.map((tags)=>
                                    <CustomPinkButton 
                                    title={tags}
                                    className='tagsButton' />
                                    )}
                                </div>
                        </div>
    </div>
  )
}
