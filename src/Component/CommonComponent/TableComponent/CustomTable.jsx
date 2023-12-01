import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Table({heading,image,keyDescription, orderClass, className, showHorizontalLine}) {

  return (
    <div>
     <Container>
     <Row>
          <Col lg={6} md={6} sm={12} className={orderClass}>
          <div className={`infoWrapper text-start`}>
              <h5 className="fs-22 fw-600 pl-10">{heading}</h5>
              {showHorizontalLine && <hr />}
              <table>
                <tbody>
                    {keyDescription.map((item,index)=>
                    
                    <tr key={index}>
                    <td>{item.key}</td>
                    <td>:</td>
                    <td>{item.value}</td>
                  </tr> 
                    )} 
                 
                
                </tbody>
                </table>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}  className={className}>
            <img src={image} className='tableImgWrapper' style={{width:'540px', marginTop:'44px'}} />
          </Col>
        </Row>
     </Container>
    </div>
  )
}
