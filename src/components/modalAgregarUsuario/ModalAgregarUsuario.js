import React, { useState } from 'react';
import './ModalAgregarUsuario.css';

const ModalRegistroUsuario = ({ show, onClose, onSave }) => {
    const usuarioInicial = {
        tipoDocumento: '',
        numDocumento: '',
        nombre: '',
        apellido: '',
        numeroCelular: '',
        correoElectronico: '',
        tipoUsuario: 'PACIENTE',
        contrasena: ''
    };

    const [usuario, setUsuario] = useState(usuarioInicial);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(usuario);
        setUsuario(usuarioInicial);
        onClose();
    };

    if (!show) return null;

    return (
        <div className="modalUsuario-overlay">
            <div className="modalUsuario-dialog">
                <div className="modalUsuario-content">
                    <div className="modalUsuario-header">
                        <h5 className="modalUsuario-title">Registro</h5>
                        <button
                            type="button"
                            className="modalUsuario-closeBtn"
                            onClick={onClose}
                        ></button>
                    </div>

                    <div className="modalUsuario-body">
                        <form onSubmit={handleSubmit}>
                            <div className="modalUsuario-row">
                                <div className="modalUsuario-col">
                                    <div className="modalUsuario-formGroup">
                                        <label className="modalUsuario-label">Tipo de documento</label>
                                        <select
                                            className="modalUsuario-select"
                                            name="tipoDocumento"
                                            value={usuario.tipoDocumento}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled selected hidden>Seleccione su documento</option>
                                            <option value="DNI">DNI</option>
                                            <option value="CE">CE</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="modalUsuario-col">
                                    <div className="modalUsuario-formGroup">
                                        <label className="modalUsuario-label">Número de documento</label>
                                        <input
                                            type="text"
                                            className="modalUsuario-input"
                                            placeholder="Ingrese número de documento"
                                            name="numDocumento"
                                            value={usuario.numDocumento}
                                            onChange={handleChange}
                                            pattern="\d{8,12}"
                                            title="Debe contener entre 8 y 12 dígitos numéricos"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="modalUsuario-row">
                                <div className="modalUsuario-col">
                                    <div className="modalUsuario-formGroup">
                                        <label className="modalUsuario-label">Nombre</label>
                                        <input
                                            type="text"
                                            className="modalUsuario-input"
                                            placeholder="Ingrese nombre del usuario"
                                            name="nombre"
                                            value={usuario.nombre}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="modalUsuario-col">
                                    <div className="modalUsuario-formGroup">
                                        <label className="modalUsuario-label">Apellido</label>
                                        <input
                                            type="text"
                                            className="modalUsuario-input"
                                            placeholder="Ingrese apellido del usuario"
                                            name="apellido"
                                            value={usuario.apellido}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="modalUsuario-row">
                                <div className="modalUsuario-col">
                                    <div className="modalUsuario-formGroup">
                                        <label className="modalUsuario-label">Teléfono</label>
                                        <input
                                            type="tel"
                                            className="modalUsuario-input"
                                            placeholder="999999999"
                                            name="numeroCelular"
                                            value={usuario.numeroCelular}
                                            onChange={handleChange}
                                            pattern="\d{9}"
                                            title="Debe contener exactamente 9 dígitos numéricos"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="modalUsuario-col">
                                    <div className="modalUsuario-formGroup">
                                        <label className="modalUsuario-label">Correo</label>
                                        <input
                                            type="email"
                                            className="modalUsuario-input"
                                            placeholder="Ingrese correo del usuario"
                                            name="correoElectronico"
                                            value={usuario.correoElectronico}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="modalUsuario-row">
                                <div className="modalUsuario-col">
                                    <div className="modalUsuario-formGroup">
                                        <label className="modalUsuario-label">Tipo de usuario</label>
                                        <select
                                            className="modalUsuario-select"
                                            name="tipoUsuario"
                                            value={usuario.tipoUsuario}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="PACIENTE">PACIENTE</option>
                                            <option value="ADMINISTRADOR">ADMINISTRADOR</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="modalUsuario-col">
                                    <div className="modalUsuario-formGroup">
                                        <label className="modalUsuario-label">Contraseña</label>
                                        <input
                                            type="password"
                                            className="modalUsuario-input"
                                            placeholder="Ingrese su contraseña"
                                            name="contrasena"
                                            value={usuario.contrasena}
                                            onChange={handleChange}
                                            pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}"
                                            title="Mínimo 8 caracteres, al menos 1 mayúscula, 1 minúscula y 1 número"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="modalUsuario-footer">
                                <button
                                    type="button"
                                    className="modalUsuario-btn modalUsuario-btnSecondary"
                                    onClick={onClose}
                                >
                                    CANCELAR
                                </button>
                                <button
                                    type="submit"
                                    className="modalUsuario-btn modalUsuario-btnPrimary"
                                >
                                    GUARDAR CAMBIOS
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalRegistroUsuario;