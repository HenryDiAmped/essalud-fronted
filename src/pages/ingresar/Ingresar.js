import React from "react";
import "./Ingresar.css";
import { Link } from "react-router-dom";
import { NavbarE } from "../../components/navbarE/NavbarE";
import { Cajalogin } from "../../components/cajalogin/Cajalogin";
import { ElementosDecoracion } from '../../components/elementosDecoracion/ElementosDecoracion'

export const Ingresar = () => {
  return (
    <div className="body-style">
      <NavbarE />
      <Cajalogin />
      <ElementosDecoracion/>
    </div>
  );
};
