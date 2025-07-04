import axios from "axios";

const MEDICO_BASE_REST_API_URL = "https://api-essalud-baayd3drfvahd9ec.centralus-01.azurewebsites.net/api/v1/medicos";

class MedicoService {
    getAllMedicos() {
        return axios.get(MEDICO_BASE_REST_API_URL);
    }

    createMedicos(medico) {
        return axios.post(MEDICO_BASE_REST_API_URL, medico);
    }

    getMedicoById(medicoId) {
        return axios.get(MEDICO_BASE_REST_API_URL + '/' + medicoId);
    }

    updateMedico(medicoId, medico) {
        return axios.put(MEDICO_BASE_REST_API_URL + '/' + medicoId, medico)
    }

    deleteMedico(medicoId) {
        return axios.delete(MEDICO_BASE_REST_API_URL + '/' + medicoId)
    }
}

const medicoService = new MedicoService();
export default medicoService;