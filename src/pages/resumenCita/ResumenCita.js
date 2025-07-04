import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CitaService from '../../services/citaService';
import TurnoAtencionCitaService from '../../services/turnosAtencionCitasService';
import PacienteService from '../../services/pacienteService'; // IMPORTANTE

export const ResumenCita = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    if (!state) {
        return <div>No hay datos seleccionados. <button onClick={() => navigate(-1)}>Volver</button></div>
    }

    const handleReservar = () => {
        // Obtenemos el usuario del localStorage
        const usuario = JSON.parse(localStorage.getItem('usuario'));

        // Si no hay usuario logueado, salimos
        if (!usuario) {
            alert("Usuario no autenticado.");
            return;
        }

        // Llamamos a traer todos los pacientes y buscamos su idPaciente
        PacienteService.getAllPacientes()
            .then(response => {
                const pacientes = response.data;
                const pacienteEncontrado = pacientes.find(p => p.usuario.idUsuario === usuario.idUsuario);

                if (!pacienteEncontrado) {
                    alert("No se encontró el paciente asociado al usuario.");
                    return;
                }

                const idPaciente = pacienteEncontrado.idPaciente;

                // Ahora armamos la cita con el idPaciente correcto
                const nuevaCita = {
                    paciente: {
                        idPaciente: idPaciente
                    },
                    turnoAtencion: {
                        idTurnosAtencionCitas: state.turnoId
                    },
                    horaCita: state.horario,
                    estado: "POR_ATENDER"
                };

                console.log("Cita a registrar:", nuevaCita);

                CitaService.createCitas(nuevaCita)
                    .then(() => {
                        // luego reducimos los cupos del turno
                        return TurnoAtencionCitaService.getTurnoAtencionCitaById(state.turnoId);
                    })
                    .then(response => {
                        const turnoActualizado = {
                            ...response.data,
                            numCupos: response.data.numCupos - 1
                        };
                        return TurnoAtencionCitaService.updateTurnoAtencionCita(state.turnoId, turnoActualizado);
                    })
                    .then(() => {
                        alert("¡Cita reservada exitosamente y cupo descontado!");
                        navigate('/');
                    })
                    .catch(error => {
                        console.error("Error durante la operación:", error);
                        alert("Ocurrió un error durante la reserva o actualización del turno.");
                    });

            })
            .catch(error => {
                console.error("Error al obtener pacientes:", error);
                alert("No se pudieron cargar los datos del paciente.");
            });
    };

    return (
        <div className="container mt-5">
            <h3>Datos de su Cita</h3>
            <div className="mt-3 p-3 border rounded">
                <p><strong>Especialidad:</strong> {state.especialidad}</p>
                <p><strong>Día:</strong> {state.dia}</p>
                <p><strong>Horario:</strong> {state.horario}</p>
                <p><strong>Doctor:</strong> {state.medico}</p>
            </div>
            <div className="mt-4">
                <button className="btn btn-success mx-2" onClick={handleReservar}>
                    Reservar Cita
                </button>
                <button className="btn btn-secondary mx-2" onClick={() => navigate(-1)}>
                    Volver
                </button>
            </div>
        </div>
    );
};
