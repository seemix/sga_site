const ApiError = require('../errors/apiError');
const Users = require('../models/user.model');

module.exports = {
    getAllUsers: async (req, res, next) => {
        try {
            const users = await Users.find({});
            res.json(users);
        } catch (e) {
            next(e);
        }
    },
    createUser: async (req, res, next) => {

    },
    getUserById: async (req, res, next) => {

    }
}