const {Router} = require('express');
const newsController = require('../controllers/news.controller');

const newsRouter = Router();
//todo make protected middleware
newsRouter.get('/', newsController.getAllNews);
newsRouter.get('/:id', newsController.getById);
newsRouter.post('/', newsController.addNews);


module.exports = newsRouter;