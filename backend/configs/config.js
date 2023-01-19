module.exports = {
    PORT: process.env.PORT || 6000,
    MONGO_URL: process.env.MONGO_URL,
    ACCESS_SECRET: process.env.ACCESS_SECRET || 'secretWord',
    REFRESH_SECRET: process.env.REFRESH_SECRET || 'secretRefreshWord',
    FRONTEND_URL: process.env.FRONTEND_URL,
    CONFIRM_ACCOUNT_ACTION_TOKEN_SECRET: process.env.CONFIRM_ACCOUNT_ACTION_TOKEN_SECRET || 'CATS',
    FORGOT_PASSWORD_ACTION_TOKEN_SECRET: process.env.FORGOT_PASSWORD_ACTION_TOKEN_SECRET || 'DOGS'
}