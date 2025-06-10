import React from 'react'
import './ElementosDecoracion.css'

export const ElementosDecoracion = () => {
  return (
    <div>
      <div className="decorative-circle top-left d-none d-md-block"></div>
      <div className="decorative-circle top-right d-none d-md-block"></div>
      <div className="bottom-left position-absolute d-none d-md-block"></div>
      <div className="bottom-right position-absolute d-none d-md-block"></div>
    </div>
  )
}
