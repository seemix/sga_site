const {Router} = require('express');
const newsController = require('../controllers/news.controller');

const newsRouter = Router();

newsRouter.get('/', newsController.getAllNews);
newsRouter.get('/:id', newsController.getById);
newsRouter.post('/', newsController.addNews);


module.exports = newsRouter;