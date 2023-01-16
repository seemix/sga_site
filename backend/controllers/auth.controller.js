const authService = require('../services/auth.service');
const tokenTypes = require("../enums/token-actions.enum");
const UserDto = require('../dtos/user.dto');
const refreshTokenModel = require('../models/refresh-token.model');
const userModel = require('../models/user.model');
const {REFRESH_SECRET} = require("../configs/config");
const apiError = require('../errors/apiError');

module.exports = {
    register: async (req, res, next) => {
        const {email, password} = req.body;
        try {
            await authService.checkUserInDb(email);
            //hash password
            const hashedPassword = await authService.hashPassword(password);
            //generate activation token
            const newUser = await authService.saveUserToDb({email: email, password: hashedPassword});
            const activationToken = authService.generateActionToken(tokenTypes.CONFIRM_ACCOUNT, {email});
            await authService.saveActivationTokenToDb(activationToken, newUser)//save userToDb
            //send email
            //make userDTO for send to client
            const userDto = new UserDto(newUser._id, newUser.email, newUser.isActivated);
            //generate tokens
            const tokens = authService.generateTokenPair({id: newUser._id});
            //save refresh token
            await authService.saveRefreshTokenToDb(tokens.refreshToken, newUser);
            //return tokens & userDTO
            res.status(201).json({...tokens, user: userDto});
        } catch (e) {
            next(e);
        }
        next();
    },
    login: async (req, res, next) => {
        try {
            const {email, password} = req.body;
            const user = await authService.findUserInDb(email);
            await authService.comparePasswords(password, user.password);
            const userDto = new UserDto(user._id, user.email, user.isActivated);
            const tokens = authService.generateTokenPair({userDto});
            await authService.saveRefreshTokenToDb(tokens.refreshToken, user);
            res.status(200).json({...tokens, user: userDto});
        } catch (e) {
            next(e)
        }
    },
    refresh: async (req, res, next) => {
        try {
            const refreshToken = req.body.refreshToken;
            console.log(refreshToken);
            if(!refreshToken) res.status(401).json('Bad token!');
            const userData = await authService.verifyToken(refreshToken, REFRESH_SECRET);
            const isTokenInDb = await refreshTokenModel.findOne({token: refreshToken});

            const user = await userModel.findById(userData.userDto.id);
            console.log(user);
            const userDto = new UserDto(user._id, user.email, user.isActivated);
            const tokens = authService.generateTokenPair({userDto});
            await authService.saveRefreshTokenToDb(tokens.refreshToken, user);
            res.status(200).json({...tokens, user: userDto});

        } catch (e) {
            next(e);
        }
    },
    //todo make logout function
    logout: async (req, res, next) => {
        try {
            const refreshToken = req.body.refreshToken;
            const token = await refreshTokenModel.deleteOne({refreshToken});
            res.json(token);
        } catch (e) {
            next(e)
        }
    }
}