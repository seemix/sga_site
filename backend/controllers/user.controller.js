const User = require('../models/user.model');
const Group = require('../models/group.model');
const  authService  = require('../services/auth.service');
const apiError = require('../errors/apiError');

module.exports = {
    formHandler: async (req, res, next) => {
        try {
            if(!req.body) {
                next(new apiError('Error sending form!',400));
            }
            const newProfile = await User.create(req.body.formData);
            res.status(201).json(newProfile);
        } catch (e) {
            next(e);
        }
    },
    getAllUsers: async (req, res, next) => {
        try {
            const users = await User.find({});
            res.json(users);
        } catch (e) {
            next(e);
        }
    },
    createUser: async (req, res, next) => {
        try {
            const currentGroup = await Group.findOne({ status: true });
            const newUser = await User.create({ group: currentGroup._id, ...req.body })
            res.json(newUser);

        } catch (e) {
            next(e);
        }

    },
    registerUser: async (req, res, next) => {
        try {
            const { email, password } = req.body.registerData;
            const hashedPassword = await authService.hashPassword(password);
            await User.updateOne({ email }, { password: hashedPassword });
            res.status(200).json('ok');
        } catch (e) {
            next(e);
        }
       // res.status(200).json('ok');

    },
    getUserById: async (req, res, next) => {

    }
}