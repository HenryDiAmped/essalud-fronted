import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CitaService from '../../services/citaService';

export const ResumenCita = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    if (!state) {
        return <div>No hay datos seleccionados. <button onClick={() => navigate(-1)}>Volver</button></div>
    }

    const handleReservar = () => {
        const nuevaCita = {
            paciente: {
                idPaciente: 1 // 👈 por ahora fijo
            },
            turnoAtencion: {
                idTurnosAtencionCitas: state.turnoId // del turno seleccionado
            },
            horaCita: state.horario, // "09:00"
            estado: "POR_ATENDER"
        };

        CitaService.createCitas(nuevaCita)
            .then(() => {
                alert("¡Cita reservada exitosamente!");
                navigate('/');
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
