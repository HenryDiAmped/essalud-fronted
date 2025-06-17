import React, { useEffect, useState } from 'react';
import usuarioService from '../../services/usuarioService';
import ModalAgregarUsuario from '../../components/modalAgregarUsuario/ModalAgregarUsuario'

export const DashboardUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        usuarioService.getAllClientes().then(response => {
            setUsuarios(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    // Guardar nuevo usuario
    const handleSaveUsuario = (nuevoUsuario) => {
        // Aquí iría la lógica para guardar el usuario
        console.log('Nuevo usuario:', nuevoUsuario);
        // Ejemplo:
        // usuarioService.createUsuario(nuevoUsuario).then(...)
    };

    return (
        <div className="container">
            <br />

            {/* Encabezado y botón */}
            <div className="d-flex justify-content-between align-items-center my-3">
                <h2 className="text-center m-0">Lista de usuarios</h2>
                <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                    + Agregar Usuario
                </button>
            </div>

            {/* Contenedor responsive */}
            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Correo Electrónico</th>
                            <th>Número de celular</th>
                            <th>Tipo de usuario</th>
                            <th>Tipo de documento</th>
                            <th>Número de documento</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map(usuario => (
                            <tr key={usuario.idUsuario}>
                                <td>{usuario.idUsuario}</td>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.apellido}</td>
                                <td>{usuario.correoElectronico}</td>
                                <td>{usuario.numeroCelular}</td>
                                <td>{usuario.tipoUsuario}</td>
                                <td>{usuario.tipoDocumento}</td>
                                <td>{usuario.numDocumento}</td>
                                <td>
                                    <div className="d-flex flex-column flex-md-row gap-2">
                                        <button className="btn btn-warning btn-sm">Editar</button>
                                        <button className="btn btn-danger btn-sm">Eliminar</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            <ModalAgregarUsuario
                show={showModal}
                onClose={() => setShowModal(false)}
                onSave={handleSaveUsuario}
            />

        </div>
    );
};
