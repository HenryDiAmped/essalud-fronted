import axios from "axios";

const ESPECIALIDAD_BASE_REST_API_URL = "http://localhost:8080/api/v1/especialidades";

class EspecialidadService {
    getAllEspecialidades() {
        return axios.get(ESPECIALIDAD_BASE_REST_API_URL, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        });
    }

    createEspecialidades(especialidad) {
        return axios.post(ESPECIALIDAD_BASE_REST_API_URL, especialidad, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        });
    }

    getEspecialidadById(especialidadId) {
        return axios.get(ESPECIALIDAD_BASE_REST_API_URL + '/' + especialidadId, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        });
    }

    updateEspecialidad(especialidadId, especialidad) {
        return axios.put(ESPECIALIDAD_BASE_REST_API_URL + '/' + especialidadId, especialidad, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        })
    }

    deleteEspecialidad(especialidadId) {
        return axios.delete(ESPECIALIDAD_BASE_REST_API_URL + '/' + especialidadId, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        })
    }
}

export default new EspecialidadService();