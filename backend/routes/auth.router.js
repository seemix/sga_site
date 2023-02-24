const authRouter = require('express').Router();
const authController = require('../controllers/auth.controller');
const registerValidator = require('../middlewares/register.middleware');

authRouter.post('/register', registerValidator, authController.register);
authRouter.post('/login', authController.login);
authRouter.post('/refresh', authController.refresh);
authRouter.post('/logout', authController.logout);
authRouter.get('/checkAuth', authController.check);

module.exports = authRouter;