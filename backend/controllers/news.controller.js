const News = require('../models/news.model');
const ApiError = require("../errors/apiError");

module.exports = {
    getAllNews: async (req, res, next) => {
        try {
            const news = await News.find();
            setTimeout(() => {
                res.json(news);
            }, 1000);

        } catch (e) {
            next(e);
        }
    },
    getById: async (req, res, next) => {
        try {
            const newsById = await News.findById(req.params.id);
            res.status(200).json(newsById);
        } catch (e) {
            next(new ApiError('Bad Request', 400));
        }
    },
    addNews: async (req, res, next) => {
        try {
            const news = await News.create(req.body);
            res.json(news);
        } catch (e) {
            next(e);
        }
    }
}