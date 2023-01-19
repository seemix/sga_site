const Router = require('express');
const newsController = require('../controllers/news.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const newsRouter = Router();
//todo make protected middleware
newsRouter.get('/', authMiddleware, newsController.getAllNews);
newsRouter.get('/:id', newsController.getById);
newsRouter.post('/', newsController.addNews);

module.exports = newsRouter;