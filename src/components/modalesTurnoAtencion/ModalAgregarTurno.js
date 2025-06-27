import React, { useState, useEffect } from 'react';
import medicoService from '../../services/medicoService';
import detalleSedeService from '../../services/detalleSedeService';

const ModalAgregarTurno = ({ show, onClose, onSave }) => {
    const turnoInicial = {
        medico: { idMedico: '' },
        detalleSede: { idDetalleSede: '' },
        fecha: '',
        horaInicio: '',
        horaFin: '',
        numCupos: ''
    };

    const [turno, setTurno] = useState(turnoInicial);
    const [medicos, setMedicos] = useState([]);
    const [detallesSede, setDetallesSede] = useState([]);
    const [especialidadSeleccionada, setEspecialidadSeleccionada] = useState('');

    useEffect(() => {
        medicoService.getAllMedicos()
            .then(response => setMedicos(response.data))
            .catch(error => console.log(error))
        detalleSedeService.getAllDetalleSedes()
            .then(response => setDetallesSede(response.data))
            .catch(error => console.log(error));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'medico') {
            setTurno(prev => ({
                ...prev,
                medico: { idMedico: value }
            }));
        } else if (name === 'idDetalleSede') {
            const detalleSeleccionado = detallesSede.find(d => d.idDetalleSede === parseInt(value));
            setEspecialidadSeleccionada(detalleSeleccionado?.especialidad?.idEspecialidad || '');
            setTurno(prev => ({
                ...prev,
                detalleSede: { idDetalleSede: value }
            }));
        } else {
            setTurno(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(turno);
        setTurno(turnoInicial);
        setEspecialidadSeleccionada('');
    };

    if (!show) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Registrar Turno de Atención</h5>
                        <button type="button" className="modal-closeBtn" onClick={onClose}></button>
                    </div>

                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="modal-row">
                                <div className="modal-col">
                                    <div className="modal-formGroup">
                                        <label className="modal-label">Detalle de Sede</label>
                                        <select
                                            className="modal-select"
                                            name="idDetalleSede"
                                            value={turno.detalleSede.idDetalleSede}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled hidden>Seleccione detalle de sede</option>
                                            {detallesSede.map(det => (
                                                <option key={det.idDetalleSede} value={det.idDetalleSede}>
                                                    {`${det.sede.nombreSede} - ${det.especialidad.nombreEspecialidad}`}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="modal-col">
                                    <div className="modal-formGroup">
                                        <label className="modal-label">Médico</label>
                                        <select
                                            className="modal-select"
                                            name="medico"
                                            value={turno.medico.idMedico}
                                            onChange={handleChange}
                                            disabled={!especialidadSeleccionada}
                                            required
                                        >
                                            <option value="" disabled hidden>Seleccione un médico</option>
                                            {medicos
                                                .filter(m => m.especialidad?.idEspecialidad === parseInt(especialidadSeleccionada))
                                                .map(medico => (
                                                    <option key={medico.idMedico} value={medico.idMedico}>
                                                        {medico.nombreMedico}
                                                    </option>
                                                ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-row">
                                <div className="modal-col">
                                    <div className="modal-formGroup">
                                        <label className="modal-label">Fecha</label>
                                        <input
                                            type="date"
                                            className="modal-input"
                                            name="fecha"
                                            value={turno.fecha}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="modal-col">
                                    <div className="modal-formGroup">
                                        <label className="modal-label">Cupos</label>
                                        <input
                                            type="number"
                                            className="modal-input"
                                            name="numCupos"
                                            value={turno.numCupos}
                                            onChange={handleChange}
                                            min="1"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="modal-row">
                                <div className="modal-col">
                                    <div className="modal-formGroup">
                                        <label className="modal-label">Hora de Inicio</label>
                                        <input
                                            type="time"
                                            className="modal-input"
                                            name="horaInicio"
                                            value={turno.horaInicio}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="modal-col">
                                    <div className="modal-formGroup">
                                        <label className="modal-label">Hora de Fin</label>
                                        <input
                                            type="time"
                                            className="modal-input"
                                            name="horaFin"
                                            value={turno.horaFin}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="modal-btn modal-btnSecondary" onClick={onClose}>
                                    CANCELAR
                                </button>
                                <button type="submit" className="modal-btn modal-btnPrimary">
                                    GUARDAR TURNO
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalAgregarTurno;
