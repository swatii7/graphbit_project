import React from 'react'
// import { Button } from 'react-bootstrap'

export default function CustomButton({ className, buttonTitle}) {
    
  return (
    
                <button className={`${className} text-white fs-18 fw-bold`}>
                  {buttonTitle}
                </button>
            
  )
}
