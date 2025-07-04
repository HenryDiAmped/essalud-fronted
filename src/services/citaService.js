import axios from "axios";

const CITA_BASE_REST_API_URL = "http://localhost:8080/api/v1/citas";

class CitaService {
    getAllCitas() {
        return axios.get(CITA_BASE_REST_API_URL, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        });
    }

    getCitasPorIDPaciente(idPaciente) {
        return axios.get(CITA_BASE_REST_API_URL + "/paciente/" + idPaciente, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        });
    }

    createCitas(cita) {
        return axios.post(CITA_BASE_REST_API_URL, cita, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        });
    }

    getCitaById(citaId) {
        return axios.get(CITA_BASE_REST_API_URL + '/' + citaId, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        });
    }

    updateCita(citaId, cita) {
        return axios.put(CITA_BASE_REST_API_URL + '/' + citaId, cita, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        })
    }

    deleteCita(citaId) {
        return axios.delete(CITA_BASE_REST_API_URL + '/' + citaId, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        })
    }
}

export default new CitaService();