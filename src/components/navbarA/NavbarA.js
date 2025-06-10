import React from "react";
import "./NavbarA.css";
import { Link } from "react-router-dom";

export const NavbarA = () => {
  return (
    <div className="container-fluid py-3 px-4 d-flex justify-content-between align-items-center">
      <Link to="/autenticacion" className="text-white text-decoration-none">
        <h2 className="m-0">EsSalud</h2>
      </Link>
      <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-sm-end">
        <Link to="/escogerpa" className="btn btn-outline-light px-3 py-2">
          Ingresa
        </Link>
        <Link to="/registrar" className="btn btn-outline-light px-3 py-2">
          Regístrate
        </Link>
      </div>
    </div>
  );
};
