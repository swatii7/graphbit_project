import React from 'react'
import { Button } from 'react-bootstrap'

export default function CustomPinkButton({type, className, title, onClick}) {
  return (
    <Button type={type} className={className} onClick={onClick}>
        {title}
    </Button>
  )
}
