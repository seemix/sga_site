const groupRouter = require('express').Router();
const groupController = require('../controllers/user.controller');
const Group = require('../models/group.model');

//groupRouter.get('/', userController.getAllUsers);
groupRouter.post('/', async (req,res) => {
        const newGroup = await Group.create(req.body);
        res.json(newGroup);

    }
);
//groupRouter.get('/:userId', userController.getUserById);

module.exports = groupRouter;