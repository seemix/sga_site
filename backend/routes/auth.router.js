const authRouter = require('express').Router();
const authController = require('../controllers/auth.controller');

authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);
authRouter.post('/refresh', authController.refresh);
authRouter.post('/logout', authController.logout);
authRouter.get('/checkAuth', authController.check);

module.exports = authRouter;