const authService = require('../services/auth.service');
const tokenTypes = require("../enums/token-actions.enum");
const UserDto = require('../dtos/user.dto');
const refreshTokenModel = require('../models/refresh-token.model');
const userModel = require('../models/user.model');
const { REFRESH_SECRET, ACCESS_SECRET } = require("../configs/config");
const apiError = require("../errors/apiError");
const { verifyToken } = require("../services/auth.service");

module.exports = {
    register: async (req, res, next) => {
        const { email, password, userName } = req.body;
        try {
            await authService.checkUserInDb(email);
            const hashedPassword = await authService.hashPassword(password);
            const newUser = await authService.saveUserToDb({
                email: email,
                password: hashedPassword,
                userName: userName
            });
            const activationToken = authService.generateActionToken(tokenTypes.CONFIRM_ACCOUNT, { email });
            await authService.saveActivationTokenToDb(activationToken, newUser)//save userToDb
            //send email
            //make userDTO for send to client
            const userDto = new UserDto(newUser._id, newUser.email, newUser.userName);
            //generate tokens
            const tokens = authService.generateTokenPair({ id: newUser._id });
            //save refresh token
            await authService.saveRefreshTokenToDb(tokens.refreshToken, newUser);
            //return tokens & userDTO
            res.status(201).json({ ...tokens, user: userDto });
        } catch (e) {
            next(e);
        }
        next();
    },
    login: async (req, res, next) => {
        try {
            const { email, password } = req.body;
            const user = await authService.findUserInDb(email);
            await authService.comparePasswords(password, user.password);
            const userDto = new UserDto(user._id, user.email, user.userName);
            //console.log(userDto);
            const tokens = authService.generateTokenPair({ userDto });
            await authService.saveRefreshTokenToDb(tokens.refreshToken, user);
            res.status(200).json({ ...tokens, user: userDto });
        } catch (e) {
            next(e)
        }
    },
    refresh: async (req, res, next) => {
        try {
            const refreshToken = req.body.refreshToken;
            if (!refreshToken) res.status(401).json('Bad token!');
            const userData = await authService.verifyToken(refreshToken, REFRESH_SECRET);
            const isTokenInDb = await refreshTokenModel.findOne({ token: refreshToken });
            if (!isTokenInDb) next(new apiError('Unauthorized', 401));
            await refreshTokenModel.deleteOne({token: refreshToken});
            const user = await userModel.findById(userData.userDto.id);
            const userDto = new UserDto(user._id, user.email, user.userName);
            const tokens = authService.generateTokenPair({ userDto });
            await authService.saveRefreshTokenToDb(tokens.refreshToken, user);
            res.status(200).json({ ...tokens, user: userDto });

        } catch (e) {
            next(e);
        }
    },
    check: async (req, res, next) => {
        try {
            const accessToken = req.headers.authorization.split(' ')[1];
            if (!accessToken) {
                next(new apiError('Bad Token', 401));
            }
            const userData = await verifyToken(accessToken, ACCESS_SECRET);
            if (!userData) {
                next(new apiError('Bad token', 401));
            }
            res.json(userData).status(200);
        } catch (e) {
            next(new apiError('Authorization error', 401));
        }
    },
    logout: async (req, res, next) => {
        try {
            const refreshToken = req.body.refreshToken;
            const token = await refreshTokenModel.deleteOne({ refreshToken });
            res.json(token);
        } catch (e) {
            next(e);
        }
    }
}