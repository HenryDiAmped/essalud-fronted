import axios from "axios";

const PACIENTE_BASE_REST_API_URL = "https://api-essalud-baayd3drfvahd9ec.centralus-01.azurewebsites.net/api/v1/pacientes";

class PacienteService {
    getAllPacientes() {
        return axios.get(PACIENTE_BASE_REST_API_URL);
    }
}

const pacienteService = new PacienteService();
export default pacienteService;