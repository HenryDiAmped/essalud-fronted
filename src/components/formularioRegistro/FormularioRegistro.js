import React, { useState } from "react";

const FormularioRegistro = ({ onRegistroExitoso }) => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    tipoDoc: "",
    documento: "",
    email: "",
    telefono: "",
    clave: "",
    terminos: false,
  });
  const [errores, setErrores] = useState({});
  const [mostrarErrores, setMostrarErrores] = useState(false);

  const manejarCambio = (e) => {
    const { name, value, type, checked } = e.target;
    const valorActual = type === "checkbox" ? checked : value;

    // Actualiza el formulario
    setFormulario({
      ...formulario,
      [name]: valorActual,
    });

    // Validación en tiempo real (si ya se mostraron errores antes)
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
      case "tipoDoc":
        return !valor ? "Selecciona un tipo de documento" : "";
      case "documento":
        return !/^\d{8,12}$/.test(valor)
          ? "Documento inválido (8-12 dígitos)"
          : "";
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)
          ? "Correo inválido"
          : "";
      case "telefono":
        return !/^\d{9}$/.test(valor) ? "Teléfono debe tener 9 dígitos" : "";
      case "clave":
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

    // Primero validamos todos los campos
    Object.keys(formulario).forEach((key) => {
      nuevosErrores[key] = validarCampo(key, formulario[key]);
    });

    // Luego actualizamos el estado
    setErrores(nuevosErrores);
    setMostrarErrores(true);

    // Verificamos si hay algún error
    return !Object.values(nuevosErrores).some((error) => error);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    if (validarFormulario()) {
      // Aquí iría la lógica para enviar los datos al servidor
      console.log("Formulario válido:", formulario);
      onRegistroExitoso();
    }
  };

  return (
    <form id="registerForm" onSubmit={manejarEnvio} noValidate>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          className={`form-control-registro ${
            errores.nombre && mostrarErrores ? "is-invalid" : ""
          }`}
          value={formulario.nombre}
          onChange={manejarCambio}
          required
        />
        {errores.nombre && mostrarErrores && (
          <div className="invalid-feedback">{errores.nombre}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="apellido" className="form-label">
          Apellido
        </label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          className={`form-control-registro ${
            errores.apellido && mostrarErrores ? "is-invalid" : ""
          }`}
          value={formulario.apellido}
          onChange={manejarCambio}
          required
        />
        {errores.apellido && mostrarErrores && (
          <div className="invalid-feedback">{errores.apellido}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Documento de identidad</label>
        <div className="document-group">
          <div className="document-type">
            <select
              id="tipo-doc"
              name="tipoDoc"
              className={`form-select ${
                errores.tipoDoc && mostrarErrores ? "is-invalid" : ""
              }`}
              value={formulario.tipoDoc}
              onChange={manejarCambio}
              required
            >
              <option value="" disabled>
                Seleccionar
              </option>
              <option value="DNI">D.N.I.</option>
              <option value="CE">C.E.</option>
            </select>
          </div>
          <div className="document-number">
            <input
              type="text"
              id="documento"
              name="documento"
              className={`form-control-registro ${
                errores.documento && mostrarErrores ? "is-invalid" : ""
              }`}
              placeholder="00000000"
              value={formulario.documento}
              onChange={manejarCambio}
              required
            />
            {errores.documento && mostrarErrores && (
              <div className="invalid-feedback">{errores.documento}</div>
            )}
          </div>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={`form-control-registro ${
            errores.email && mostrarErrores ? "is-invalid" : ""
          }`}
          value={formulario.email}
          onChange={manejarCambio}
          required
        />
        {errores.email && mostrarErrores && (
          <div className="invalid-feedback">{errores.email}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="telefono" className="form-label">
          Teléfono
        </label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          className={`form-control-registro ${
            errores.telefono && mostrarErrores ? "is-invalid" : ""
          }`}
          value={formulario.telefono}
          onChange={manejarCambio}
          required
        />
        {errores.telefono && mostrarErrores && (
          <div className="invalid-feedback">{errores.telefono}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="clave" className="form-label">
          Contraseña
        </label>
        <input
          type="password"
          id="clave"
          name="clave"
          className={`form-control-registro ${
            errores.clave && mostrarErrores ? "is-invalid" : ""
          }`}
          value={formulario.clave}
          onChange={manejarCambio}
          required
        />
        {errores.clave && mostrarErrores && (
          <div className="invalid-feedback">{errores.clave}</div>
        )}
      </div>

      <div className="form-check mb-4 text-start">
        <input
          className={`form-check-input ${
            errores.terminos && mostrarErrores ? "is-invalid" : ""
          }`}
          type="checkbox"
          id="terminos"
          name="terminos"
          checked={formulario.terminos}
          onChange={manejarCambio}
          required
        />
        <label className="form-check-label" htmlFor="terminos">
          Acepto los <a href="#">Términos y Condiciones</a> y{" "}
          <a href="#">Política de Privacidad</a>
        </label>
        {errores.terminos && mostrarErrores && (
          <div className="invalid-feedback">{errores.terminos}</div>
        )}
      </div>

      <button type="submit" className="btn btn-submit">
        REGISTRARSE
      </button>
    </form>
  );
};

// Al final del archivo debe tener:
export default FormularioRegistro;
