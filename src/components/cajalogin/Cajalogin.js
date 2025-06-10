import React from "react";
import "./Cajalogin.css";
import abrazoImg from "../../images/AbrazoESSALUD.png";

export const Cajalogin = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-7">
          <div className="login-box">
            <h2>INGRESA</h2>
            <form>
              <div className="input-group mb-4">
                <span className="input-group-text">
                  <i className="fas fa-user"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Número de documento"
                  required
                />
              </div>

              <div className="input-group mb-4">
                <span className="input-group-text">
                  <i className="fas fa-lock"></i>
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  required
                />
              </div>

              <button type="submit">INGRESAR</button>
              <a href="#">¿Olvidaste tu contraseña?</a>
            </form>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-10 col-md-8 text-center">
          <img src={abrazoImg} className="family-img" alt="Familia" />
        </div>
      </div>
    </div>
  );
};
