import axios from 'axios';
import baseURL from '../configs/urls';

const axiosService = axios.create({baseURL, withCredentials: true});

axiosService.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
        // config.headers.Authorization = `Bearer ${accessToken}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosService.interceptors.response.use((config) => {
        return config;
    },
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && error.config && !error.config._isRetry) {
            originalRequest._isRetry = true;
            try {
                const refreshToken = localStorage.getItem('refreshToken');
                const response = await axiosService.post('auth/refresh', {refreshToken});
                localStorage.setItem('token', response.data.accessToken);
                localStorage.setItem('refreshToken', response.data.refreshToken);
                return axiosService.request(originalRequest);
            } catch (e) {
                console.log(e);
            }
        }
        throw error;
    })

export default axiosService;
