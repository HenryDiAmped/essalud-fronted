import React, { useEffect, useState } from 'react';
import turnosService from '../../services/turnosAtencionCitasService';

export const TablaTurnos = ({ idSede, idEspecialidad }) => {
    const [turnos, setTurnos] = useState([]);

    useEffect(() => {
        turnosService.getAllTurnosAtencionCitas()
            .then(response => {
                // Filtramos solo los turnos que correspondan a la sede y especialidad elegida
                const turnosFiltrados = response.data.filter(turno =>
                    turno.detalleSede.sede.idSedes === idSede &&
                    turno.detalleSede.especialidad.idEspecialidad === idEspecialidad
                );

                // Ordena por fecha y hora para visualización ordenada
                turnosFiltrados.sort((a, b) => {
                    if (a.fecha !== b.fecha) {
                        return new Date(a.fecha) - new Date(b.fecha);
                    }
                    return a.horaInicio.localeCompare(b.horaInicio);
                });

                setTurnos(turnosFiltrados);
            })
            .catch(error => console.error("Error al cargar turnos:", error));
    }, [idSede, idEspecialidad]);

    return (
        <div className="table-responsive mt-4">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Horario</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {turnos.length === 0 && (
                        <tr>
                            <td colSpan="3" className="text-center">No hay turnos disponibles para esta especialidad en esta sede.</td>
                        </tr>
                    )}
                    {turnos.map((turno, idx) => (
                        <tr key={idx}>
                            <td>{turno.fecha}</td>
                            <td>{`${turno.horaInicio} - ${turno.horaFin}`}</td>
                            <td>
                                {turno.numCupos > 0
                                    ? <span className="badge bg-primary">Disponible</span>
                                    : <span className="badge bg-secondary">No Disponible</span>
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
