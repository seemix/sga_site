import axiosService from './axios.service';

export const userService = {
    sendForm: (formData) => axiosService.post('/users/form', { formData }).then(value => value.data),
    register: (registerData) => axiosService.post('users/register', { registerData }).then(value => value.data),
};