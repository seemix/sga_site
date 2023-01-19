import axiosService from "./axios.service";

// const config = { 'content-type': 'application/json' };
export const authService = {
    register: (email, password) => axiosService.post('auth/register').then(value => value.data),
    login: (loginData) => {
        return axiosService.post('/auth/login', loginData).then(value => value.data).catch()
    },
    checkAuth: () => axiosService.get('auth/checkauth').then(value => value.data),
    logout: (refreshToken) => axiosService.post('auth/logout', { refreshToken }).then(value => value.data)
}