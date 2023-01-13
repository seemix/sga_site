const userRouter = require('express').Router();
const userController = require('../controllers/user.controller');

userRouter.get('/',userController.getAllUsers);
userRouter.post('/',userController.createUser);
userRouter.get('/:userId',userController.getUserById);

module.exports = userRouter;