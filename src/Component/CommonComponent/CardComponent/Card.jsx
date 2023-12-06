import React from 'react'

export default function Card({image, heading, para, className, headingClass}) {
  return (
    <div style={{marginTop:'-15px'}}>
      <div className='imgWrapper'>
                                <img src={image} className="imageClass wow flipInY"
                                data-wow-duration="0.6s"
                                data-wow-delay="0.3s" />
                            </div>
                            <div className={className}>
                                <h4 className={headingClass}>
                                {heading}
                                </h4>
                                <p className='fs-16 mb-15' style={{color:'#ddd'}}>
                                {para}
                                </p>
                            </div>
    </div>
  )
}
