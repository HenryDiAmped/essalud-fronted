import React from 'react'
import './EscogerPA.css'
import { NavbarE } from '../../components/navbarE/NavbarE'
import { InformacionE } from '../../components/informacionE/InformacionE'
import { ElementosDecoracion } from '../../components/elementosDecoracion/ElementosDecoracion'


export const EscogerPA = () => {
  return (
    <div className="body-essalud">
        <NavbarE/>
        <InformacionE/>
        <ElementosDecoracion/>
    </div>
  )
}
