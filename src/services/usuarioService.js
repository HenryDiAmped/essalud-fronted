import axios from "axios";

const USUARIO_BASE_REST_API_URL = "http://localhost:8080/api/v1/usuarios";

class UsuarioService {
    getAllUsuarios() {
        return axios.get(USUARIO_BASE_REST_API_URL, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        });
    }

    createUsuarios(usaurio) {
        return axios.post(USUARIO_BASE_REST_API_URL, usaurio, {
            auth: {
                username: "admin",
                password: "admin123"
            }
        });
    }
}

export default new UsuarioService();