import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UsuarioService from "../../services/usuarioService"; // o tu ruta correcta

const FormularioRegistro = () => {
  const navigate = useNavigate();

  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    tipoDocumento: "",
    numDocumento: "",
    correoElectronico: "",
    numeroCelular: "",
    contrasena: "",
    terminos: false,
  });

  const [errores, setErrores] = useState({});
  const [mostrarErrores, setMostrarErrores] = useState(false);

  const manejarCambio = (e) => {
    const { name, value, type, checked } = e.target;
    const valorActual = type === "checkbox" ? checked : value;

    setFormulario({
      ...formulario,
      [name]: valorActual,
    });

    if (mostrarErrores) {
      const error = validarCampo(name, valorActual);
      setErrores({
        ...errores,
        [name]: error,
      });
    }
  };

  const validarCampo = (nombre, valor) => {
    switch (nombre) {
      case "nombre":
      case "apellido":
        return !valor ? "Este campo es obligatorio" : "";
      case "tipoDocumento":
        return !valor ? "Selecciona un tipo de documento" : "";
      case "numDocumento":
        return !/^\d{8,12}$/.test(valor)
          ? "Documento inválido (8-12 dígitos)"
          : "";
      case "correoElectronico":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)
          ? "Correo inválido"
          : "";
      case "numeroCelular":
        return !/^\d{9}$/.test(valor) ? "Teléfono debe tener 9 dígitos" : "";
      case "contrasena":
        return !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(valor)
          ? "Mínimo 8 caracteres, 1 mayúscula, 1 minúscula y 1 número"
          : "";
      case "terminos":
        return !valor ? "Debes aceptar los términos" : "";
      default:
        return "";
    }
  };

  const validarFormulario = () => {
    const nuevosErrores = {};
    Object.keys(formulario).forEach((key) => {
      nuevosErrores[key] = validarCampo(key, formulario[key]);
    });
    setErrores(nuevosErrores);
    setMostrarErrores(true);
    return !Object.values(nuevosErrores).some((error) => error);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      const usuarioParaGuardar = {
        nombre: formulario.nombre,
        apellido: formulario.apellido,
        tipoDocumento: formulario.tipoDocumento,
        numDocumento: formulario.numDocumento,
        correoElectronico: formulario.correoElectronico,
        numeroCelular: formulario.numeroCelular,
        contrasena: formulario.contrasena,
        tipoUsuario: "PACIENTE"
      };
      console.log("Enviando:", usuarioParaGuardar);

      UsuarioService.createUsuarios(usuarioParaGuardar)
        .then(() => {
          alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
          navigate("/ingresar");
        })
        .catch((err) => {
          console.error("Error al registrar usuario:", err);
          alert("Ocurrió un error al registrarte. Intenta nuevamente.");
        });
    }
  };

  return (
    <form onSubmit={manejarEnvio} noValidate>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          className={`form-control-registro ${errores.nombre && mostrarErrores ? "is-invalid" : ""}`}
          value={formulario.nombre}
          onChange={manejarCambio}
          required
        />
        {errores.nombre && mostrarErrores && <div className="invalid-feedback">{errores.nombre}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="apellido" className="form-label">Apellido</label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          className={`form-control-registro ${errores.apellido && mostrarErrores ? "is-invalid" : ""}`}
          value={formulario.apellido}
          onChange={manejarCambio}
          required
        />
        {errores.apellido && mostrarErrores && <div className="invalid-feedback">{errores.apellido}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Documento de identidad</label>
        <div className="document-group">
          <select
            name="tipoDocumento"
            className={`form-select ${errores.tipoDocumento && mostrarErrores ? "is-invalid" : ""}`}
            value={formulario.tipoDocumento}
            onChange={manejarCambio}
            required
          >
            <option value="" disabled>Seleccionar</option>
            <option value="DNI">D.N.I.</option>
            <option value="CE">C.E.</option>
          </select>
          <input
            type="text"
            name="numDocumento"
            className={`form-control-registro ${errores.numDocumento && mostrarErrores ? "is-invalid" : ""}`}
            placeholder="00000000"
            value={formulario.numDocumento}
            onChange={manejarCambio}
            required
          />
          {errores.numDocumento && mostrarErrores && <div className="invalid-feedback">{errores.numDocumento}</div>}
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="correoElectronico" className="form-label">Correo electrónico</label>
        <input
          type="email"
          id="correoElectronico"
          name="correoElectronico"
          className={`form-control-registro ${errores.correoElectronico && mostrarErrores ? "is-invalid" : ""}`}
          value={formulario.correoElectronico}
          onChange={manejarCambio}
          required
        />
        {errores.correoElectronico && mostrarErrores && <div className="invalid-feedback">{errores.correoElectronico}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="numeroCelular" className="form-label">Teléfono</label>
        <input
          type="tel"
          id="numeroCelular"
          name="numeroCelular"
          className={`form-control-registro ${errores.numeroCelular && mostrarErrores ? "is-invalid" : ""}`}
          value={formulario.numeroCelular}
          onChange={manejarCambio}
          required
        />
        {errores.numeroCelular && mostrarErrores && <div className="invalid-feedback">{errores.numeroCelular}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="contrasena" className="form-label">Contraseña</label>
        <input
          type="password"
          id="contrasena"
          name="contrasena"
          className={`form-control-registro ${errores.contrasena && mostrarErrores ? "is-invalid" : ""}`}
          value={formulario.contrasena}
          onChange={manejarCambio}
          required
        />
        {errores.contrasena && mostrarErrores && <div className="invalid-feedback">{errores.contrasena}</div>}
      </div>

      <div className="form-check mb-4 text-start">
        <input
          className={`form-check-input ${errores.terminos && mostrarErrores ? "is-invalid" : ""}`}
          type="checkbox"
          name="terminos"
          checked={formulario.terminos}
          onChange={manejarCambio}
          required
        />
        <label className="form-check-label" htmlFor="terminos">
          Acepto los <a href="#">Términos y Condiciones</a> y <a href="#">Política de Privacidad</a>
        </label>
        {errores.terminos && mostrarErrores && <div className="invalid-feedback">{errores.terminos}</div>}
      </div>

      <button type="submit" className="btn btn-submit">
        REGISTRARSE
      </button>
    </form>
  );
};

export default FormularioRegistro;
