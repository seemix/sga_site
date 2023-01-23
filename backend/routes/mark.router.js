const markRouter = require('express').Router();
const groupController = require('../controllers/user.controller');
const Mark = require('../models/mark.model');

//groupRouter.get('/', userController.getAllUsers);
markRouter.post('/', async (req, res) => {
        const newGroup = await Mark.create(req.body);
        res.json(newGroup);
    }
);
markRouter.get('/', async (req, res) => {
    const marks = await Mark.find().populate({path: 'exam', select: ['subject', 'date']}).populate('user','userName');
    res.json(marks);
});

module.exports = markRouter;