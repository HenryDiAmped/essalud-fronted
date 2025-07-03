import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CitaService from '../../services/citaService';
import TurnoAtencionCitaService from '../../services/turnosAtencionCitasService';

export const ResumenCita = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    if (!state) {
        return <div>No hay datos seleccionados. <button onClick={() => navigate(-1)}>Volver</button></div>
    }

    const handleReservar = () => {
        const nuevaCita = {
            paciente: {
                idPaciente: 1
            },
            turnoAtencion: {
                idTurnosAtencionCitas: state.turnoId
            },
            horaCita: state.horario,
            estado: "POR_ATENDER"
        };

        CitaService.createCitas(nuevaCita)
            .then(() => {
                // luego reducimos los cupos del turno
                TurnoAtencionCitaService.getTurnoAtencionCitaById(state.turnoId)
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
                        console.error("Error al actualizar los cupos del turno:", error);
                        alert("La cita se creó, pero no se pudo actualizar los cupos del turno.");
                    });
            })
            .catch(error => {
                console.error("Error al reservar cita:", error);
                alert("Ocurrió un error al reservar la cita.");
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
