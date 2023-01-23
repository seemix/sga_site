const Users = require('../models/user.model');
const Group = require('../models/group.model');

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
        try {
            const currentGroup = await Group.findOne({ status: true });
            const newUser = await Users.create({ group: currentGroup._id, ...req.body })
            res.json(newUser);

        } catch (e) {
            next(e);
        }

    },
    getUserById: async (req, res, next) => {

    }
}