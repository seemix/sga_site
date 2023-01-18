const Router = require('express');
const newsRouter = require('./news.router');
const userRouter = require('./user.router');
const authRouter = require('./auth.router');

const router = Router();

router.use('/news', newsRouter);
router.use('/users', userRouter);
router.use('/auth', authRouter);

module.exports = router;