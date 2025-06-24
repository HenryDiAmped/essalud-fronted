import axios from "axios";

const MEDICO_BASE_REST_API_URL = "http://localhost:8080/api/v1/medicos";

class MedicoService {
    getAllMedicos() {
        return axios.get(MEDICO_BASE_REST_API_URL, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        });
    }

    createMedicos(medico) {
        return axios.post(MEDICO_BASE_REST_API_URL, medico, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        });
    }

    getMedicoById(medicoId) {
        return axios.get(MEDICO_BASE_REST_API_URL + '/' + medicoId, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        });
    }

    updateMedico(medicoId, medico) {
        return axios.put(MEDICO_BASE_REST_API_URL + '/' + medicoId, medico, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        })
    }

    deleteMedico(medicoId) {
        return axios.delete(MEDICO_BASE_REST_API_URL + '/' + medicoId, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        })
    }
}

export default new MedicoService();