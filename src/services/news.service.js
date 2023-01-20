import axiosService from './axios.service';

export const newsService = {
    getAll: (page) => axiosService.get(`/news?page=${page}`).then(value => value.data),
    getById: (id) => axiosService.get('/news/' + id).then(value => value.data)
}