const apiError = require('../errors/apiError');
const {verifyToken} = require('../services/auth.service');
const {ACCESS_SECRET} = require('../configs/config');


module.exports = async (req, res, next) => {
    try {
        const accessToken = req.headers.authorization.split(' ')[1];
        if (!accessToken) {
            next(new apiError('Bad Token', 401));
        }
        const userData = await verifyToken(accessToken, ACCESS_SECRET);
        if (!userData) {
            next(new apiError('Bad token', 401));
        }
        req.user = userData;
        next();
    } catch (e) {
        next(new apiError('Authorization error', 401));
    }
}