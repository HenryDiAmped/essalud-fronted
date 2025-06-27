import axios from "axios";

const DETALLE_SEDE_BASE_REST_API_URL = "http://localhost:8080/api/v1/detalleSedes";

class DetalleSedeService {
    getAllDetalleSedes() {
        return axios.get(DETALLE_SEDE_BASE_REST_API_URL, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        });
    }

    createDetalleSedes(detalleSede) {
        return axios.post(DETALLE_SEDE_BASE_REST_API_URL, detalleSede, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        });
    }

    getDetalleSedeById(detalleSedeId) {
        return axios.get(DETALLE_SEDE_BASE_REST_API_URL + '/' + detalleSedeId, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        });
    }

    updateDetalleSede(detalleSedeId, detalleSede) {
        return axios.put(DETALLE_SEDE_BASE_REST_API_URL + '/' + detalleSedeId, detalleSede, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        })
    }

    deleteDetalleSede(detalleSedeId) {
        return axios.delete(DETALLE_SEDE_BASE_REST_API_URL + '/' + detalleSedeId, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        })
    }
}

export default new DetalleSedeService();