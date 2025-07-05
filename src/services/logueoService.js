import axios from "axios";

const LOGUEO_BASE_REST_API_URL = "https://api-essalud-baayd3drfvahd9ec.centralus-01.azurewebsites.net/api/v1/auth/login";

class LogueoService {
    comprobarLogueo(loginData) {
        return axios.post(LOGUEO_BASE_REST_API_URL, loginData);
    }
}

const logueoService = new LogueoService();
export default logueoService;
