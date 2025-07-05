import React from "react";
import "./Ingresar.css";
import { NavbarE } from "../../components/navbarE/NavbarE";
import { Cajalogin } from "../../components/cajalogin/Cajalogin";
import { ElementosDecoracion } from '../../components/elementosDecoracion/ElementosDecoracion'

export const Ingresar = () => {
  return (
    <div className="body-style">
      <NavbarE />
      <Cajalogin />
      <ElementosDecoracion />
    </div>
  );
};
