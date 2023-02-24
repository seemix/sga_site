const userRouter = require('express').Router();
const userController = require('../controllers/user.controller');
const registerMiddleware = require('../middlewares/register.middleware');

userRouter.get('/', userController.getAllUsers);
userRouter.post('/', userController.createUser);
userRouter.get('/:userId', userController.getUserById);
userRouter.post('/form', userController.formHandler);
userRouter.post('/register', registerMiddleware, userController.registerUser);

module.exports = userRouter;