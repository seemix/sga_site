import axiosService from './axios.service';

export const newsService = {
    getAll: (params) => axiosService.get(`/news?page=${params.page}&limit=${params.limit}`).then(value => value.data),
    getById: (id) => axiosService.get('/news/' + id).then(value => value.data)
}