const News = require('../models/news.model');
const ApiError = require('../errors/apiError');
const { NEWS_ON_PAGE } = require('../configs/config');

module.exports = {
    getAllNews: async (req, res, next) => {
        try {
            const pages = Math.ceil(await News.find().count() / NEWS_ON_PAGE);
            const { page = 1 } = req.query;
            let { limit } = req.query;
            if(limit === '') limit = NEWS_ON_PAGE;
            const news = await News.find()
                .sort({ createdAt: -1 })
                .limit(limit)
                .skip((page - 1) * NEWS_ON_PAGE);

            res.json({
                pages,
                page,
                news
            });

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