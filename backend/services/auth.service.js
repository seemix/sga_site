const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();
const { ACCESS_SECRET, REFRESH_SECRET } = require('../configs/config');
const tokenTypes = require('../enums/token-actions.enum');
const ApiError = require('../errors/apiError');
const userModel = require('../models/user.model');
const refreshTokenModel = require('../models/refresh-token.model');
const activationTokenModel = require('../models/activate-token.model');
const {
    CONFIRM_ACCOUNT_ACTION_TOKEN_SECRET,
    FORGOT_PASSWORD_ACTION_TOKEN_SECRET
} = require('../configs/config');

module.exports = {
    checkUserInDb: async (email) => {
        const candidate = await userModel.findOne({ email });
        if (candidate) {
            throw new ApiError(`Email ${email} is already registered!`, 400);
        }
    },
    findUserInDb: async (email) => {
        const user = await userModel.findOne({ email });
        if (!user) {
            throw new ApiError('Email or password is incorrect!', 400);
        }
        return user;
    },

    saveUserToDb: async (email, password, activationToken) => {
        return userModel.create(email, password);
    },

    hashPassword: (password) => {
        return bcrypt.hash(password, 5);
    },

    comparePasswords: async (password, hashedPassword) => {
        const isPasswordsSame = await bcrypt.compare(password, hashedPassword);
        if (!isPasswordsSame) {
            throw new ApiError('Wrong email or password!', 401);
        }
    },

    generateActionToken: (actionType, dataToSign = {}) => {
        let secretWord = '';
        if (actionType === tokenTypes.CONFIRM_ACCOUNT) secretWord = CONFIRM_ACCOUNT_ACTION_TOKEN_SECRET;
        else if (actionType === tokenTypes.FORGOT_PASSWORD) secretWord = FORGOT_PASSWORD_ACTION_TOKEN_SECRET;
        return jwt.sign(dataToSign, secretWord, { expiresIn: '2d' });
    },

    generateTokenPair: (dataToSign = {}) => {
        const accessToken = jwt.sign(dataToSign, ACCESS_SECRET, { expiresIn: '10m' });
        const refreshToken = jwt.sign(dataToSign, REFRESH_SECRET, { expiresIn: '20d' });
        return {
            accessToken,
            refreshToken
        }
    },

    saveRefreshTokenToDb: (refreshToken, user) => {
        return refreshTokenModel.create({ token: refreshToken, user });
    },
    saveActivationTokenToDb: (activationToken, user) => {
        return activationTokenModel.create({ token: activationToken, user });
    },

    verifyToken: (token = '', secret) => {
        try {
            return jwt.verify(token, secret);
        } catch (e) {
            throw new ApiError('Token invalid', 401);
        }
    }
}