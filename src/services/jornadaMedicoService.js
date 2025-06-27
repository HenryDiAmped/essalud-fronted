import axios from "axios";

const JORNADA_MEDICO_BASE_REST_API_URL = "http://localhost:8080/api/v1/jornadaMedicos";

class JornadaMedicoService {
    getAllJornadaMedicos() {
        return axios.get(JORNADA_MEDICO_BASE_REST_API_URL, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        });
    }

    createJornadaMedicos(jornadaMedico) {
        return axios.post(JORNADA_MEDICO_BASE_REST_API_URL, jornadaMedico, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        });
    }

    getJornadaMedicoById(jornadaMedicoId) {
        return axios.get(JORNADA_MEDICO_BASE_REST_API_URL + '/' + jornadaMedicoId, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        });
    }

    updateJornadaMedico(jornadaMedicoId, jornadaMedico) {
        return axios.put(JORNADA_MEDICO_BASE_REST_API_URL + '/' + jornadaMedicoId, jornadaMedico, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        })
    }

    deleteJornadaMedico(jornadaMedicoId) {
        return axios.delete(JORNADA_MEDICO_BASE_REST_API_URL + '/' + jornadaMedicoId, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        })
    }
}

export default new JornadaMedicoService();