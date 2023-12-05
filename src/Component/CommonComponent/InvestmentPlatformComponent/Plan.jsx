import React, { useState } from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap'
import CustomButton from '../CustomButton/CustomButton'
import { AnimatedOnScroll } from 'react-animated-css-onscroll'


export default function Plan({cardHeading, cardFooter, cardBadge, allBtns, isActive, handleClick, contentfordays }) {

  return (
    <AnimatedOnScroll animateIn="fadeInUp">
<div className='bg-blue planWrapper'>
        <Container>
            <Row>
                <Col lg={5} md={6} sm={12}>
                  <div>
                    <h3 className='fs-32 fw-600 mb-20 lh-40'>
                    {cardHeading}
                    </h3>
                    <div className='d-flex mb-20'>
                      {allBtns.map((item,index)=> 
                    <Button 
                    key={index}  
                    variant="outline-light" 
                    className={isActive === item ? 'planDays active': 'planDays' } 
                    onClick={()=>handleClick(item)}>{`${item} Days`}
                    </Button>
                      
                      )}
                    </div>
                   
                    <p className='d-flex'>
                    {cardFooter}
                    <div className='bg-pink badgeWrapper '>
                      {cardBadge}
                    </div>
                    </p>

                  </div>
                </Col>
                <Col lg={5} md={6} sm={12}>
                  <div>
                    <table>
                      <tbody>
                        {contentfordays.map((data,index)=>
                       
                        <tr key={index} className='mb-15'>
                        <td className='fs-17 fw-600 cardContent'>{data.key}</td>
                        <td className='text-pink equalTo'>=</td>
                        <td className='fs-18 fw-600 cardContent'>{data.value}</td>
                      </tr>
                        )}
                       
                      </tbody>
                    </table>
                  </div>
                </Col>
                <Col lg={2} md={12} sm={12} className='text-md-end text-sm-start'>
                <CustomButton buttonTitle='Stacking'
         className="pink-btn navButton transition-btn py-12 px-20 mt-15" />
                </Col>
            </Row>
        </Container>
      
    </div>
    </AnimatedOnScroll>
    
  )
}
