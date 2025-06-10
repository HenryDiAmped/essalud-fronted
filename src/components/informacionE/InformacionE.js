import React from "react";
import "./InformacionE.css";
import abrazoImg from "../../images/AbrazoESSALUD.png";
import { Link } from "react-router-dom";

export const InformacionE = () => {
  return (
    <div className="container text-center mt-5 pt-4">
      <h1 className="title display-5 display-md-3 display-lg-1">
        RESERVA TUS CITAS
      </h1>
      <p className="mt-4 responsive-text px-3 px-md-5">
        Agenda tus citas de manera rápida, fácil y segura desde la comodidad de
        tu hogar. <br />
        Con nuestro sistema en línea, puedes: Solicitar citas médicas en
        minutos,
        <br />
        Revisar tu historial de atenciones, Consultar la disponibilidad de
        especialistas y más.
      </p>
      <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
        <Link to="/ingresar" className="btn btn-outline-light px-4 py-2">
          Paciente
        </Link>
        <a href="#" className="btn btn-outline-light px-4 py-2">
          Administrador
        </a>
      </div>
      <img
        src={abrazoImg}
        className="img-fluid family-img mt-5"
        alt="Familia"
      />
    </div>
  );
};
