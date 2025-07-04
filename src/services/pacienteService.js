import axios from "axios";

const PACIENTE_BASE_REST_API_URL = "http://localhost:8080/api/v1/pacientes";

class PacienteService {
    getAllPacientes() {
        return axios.get(PACIENTE_BASE_REST_API_URL, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        });
    }
}

export default new PacienteService();