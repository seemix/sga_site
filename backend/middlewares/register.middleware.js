const apiError = require('../errors/apiError');
const User = require('../models/user.model');

module.exports = async (req, res, next) => {
    try {
        const { email, password } = req.body.registerData;

        if(!email || !password ) {
            next(new apiError('Bad request', 400));
        }
        const userToActivate = await User.findOne({email});
        if(!userToActivate) {
            next(new apiError('No such user!', 400));
        }
        if(userToActivate.status !== 'approved') {
            next(new apiError('User is not approved', 400));
        }
        if(userToActivate.password !== '') {
            next(new apiError('User is already registered!', 400));
        }
        next();
    } catch (e) {
        next(e);
    }
}