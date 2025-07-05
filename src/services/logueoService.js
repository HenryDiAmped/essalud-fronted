import axios from "axios";

const LOGUEO_BASE_REST_API_URL = process.env.REACT_APP_API_URL + "/api/v1/auth/login";

class LogueoService {
    comprobarLogueo(loginData) {
        return axios.post(LOGUEO_BASE_REST_API_URL, loginData);
    }
}

export default new LogueoService();
