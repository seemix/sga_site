import axiosService from "./axios.service";

export const newsService = {
    getAll: () => axiosService.get('/news').then(value => value.data),
    getById: (id) => axiosService.get('/news/'+id).then(value => value.data)
}