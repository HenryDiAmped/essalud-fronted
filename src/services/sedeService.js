import axios from "axios";

const SEDE_BASE_REST_API_URL = "http://localhost:8080/api/v1/sedes";

class SedeService {
    getAllSedes() {
        return axios.get(SEDE_BASE_REST_API_URL, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        });
    }

    createSedes(sede) {
        return axios.post(SEDE_BASE_REST_API_URL, sede, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        });
    }

    getSedeById(sedeId) {
        return axios.get(SEDE_BASE_REST_API_URL + '/' + sedeId, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        });
    }

    updateSede(sedeId, sede) {
        return axios.put(SEDE_BASE_REST_API_URL + '/' + sedeId, sede, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        })
    }

    deleteSede(sedeId) {
        return axios.delete(SEDE_BASE_REST_API_URL + '/' + sedeId, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        })
    }
}

export default new SedeService();