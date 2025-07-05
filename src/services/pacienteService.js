import axios from "axios";

const PACIENTE_BASE_REST_API_URL = process.env.REACT_APP_API_URL + "/api/v1/pacientes";

class PacienteService {
    getAllPacientes() {
        return axios.get(PACIENTE_BASE_REST_API_URL);
    }
}

export default new PacienteService();