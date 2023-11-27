import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import featureImg from '../../../assets/Header/featureImg.webp'
import featureBgImg from '../../../assets/Header/circle.webp'

export default function Features() {

    const featuresArr=[
        {
            number: '01',
            title: 'Decentralized System',
            description:'Replacing a maintains the amount of lines. When replacing a selection. help agencies to define. define their new business objectives and then. maintains the amount of lines'
        },
        {
            number: '02',
            title: 'Blockchain Wallet',
            description:'Replacing a maintains the amount of lines. When replacing a selection. help agencies to define. define their new business objectives and then. maintains the amount of lines'
        },
        {
            number: '03',
            title: 'Web3 Project',
            description:'Replacing a maintains the amount of lines. When replacing a selection. help agencies to define. define their new business objectives and then. maintains the amount of lines'
        },

    ]

  return (
    <div className='featureWrapper'>
        <Container>
            <Row className='flex-wrap'>
                <Col>
                <div>
                    <div className='featureImageWrapper'>
                        <img src={featureImg} />
                        <div className='circleImageWrapper rotateme'>
                            <img src={featureBgImg} />
                        </div>
                    </div>
                    </div>
                    </Col>
                <Col>
                <div className='ml-40 position-relative featureListWrapper'>
                    <div className='position-relative d-block pt-40 pb-10 featureList'>
                        {featuresArr.map((list, index)=>
                         <div key={index} className='mb-40 featuresDiv'>
                         <span>
                            {list.number}
                         </span>
                         <div className='pl-70'>
                             <h4 className='featureTitle'>{list.title}</h4>
                             <p className='featureDesc'>{list.description}</p>
                         </div>
                     </div>
                     )}
                       

                    </div>
                </div>
                </Col>
            </Row>
        </Container>
      
    </div>
  )
}
