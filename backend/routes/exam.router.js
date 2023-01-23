const examRouter = require('express').Router();
//const groupController = require('../controllers/user.controller');
const Exam = require('../models/exam.model');

//groupRouter.get('/', userController.getAllUsers);
examRouter.post('/', async (req,res) => {
        const newGroup = await Exam.create(req.body);
        res.json(newGroup);
    }
);
//groupRouter.get('/:userId', userController.getUserById);

module.exports = examRouter;