import axios from 'axios';

const urlBase = 'https://fakestoreapi.com';

class HttpService {
    axiosInstance = axios.create({
        baseURL: urlBase
    });

    async request({ url, method = 'GET', data = null }) {
        try {
            const response = await this.axiosInstance({ url, method, data });
            return response.data;
        } catch (error) {
            console.error('Error en la petición HTTP:', error);
            throw error;
        }
    }
}

export const httpService = new HttpService();
