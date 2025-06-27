import axios from "axios";

const TURNO_ATENCION_CITA_BASE_REST_API_URL = "http://localhost:8080/api/v1/turnosAtencionCitas";

class TurnoAtencionCitaService {
    getAllTurnosAtencionCitas() {
        return axios.get(TURNO_ATENCION_CITA_BASE_REST_API_URL, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        });
    }

    createTurnosAtencionCitas(turnoAtencionCita) {
        return axios.post(TURNO_ATENCION_CITA_BASE_REST_API_URL, turnoAtencionCita, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        });
    }

    getTurnoAtencionCitaById(turnoAtencionCitaId) {
        return axios.get(TURNO_ATENCION_CITA_BASE_REST_API_URL + '/' + turnoAtencionCitaId, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        });
    }

    updateTurnoAtencionCita(turnoAtencionCitaId, turnoAtencionCita) {
        return axios.put(TURNO_ATENCION_CITA_BASE_REST_API_URL + '/' + turnoAtencionCitaId, turnoAtencionCita, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        })
    }

    deleteTurnoAtencionCita(turnoAtencionCitaId) {
        return axios.delete(TURNO_ATENCION_CITA_BASE_REST_API_URL + '/' + turnoAtencionCitaId, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        })
    }
}

export default new TurnoAtencionCitaService();