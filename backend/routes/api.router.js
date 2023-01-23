const Router = require('express');
const newsRouter = require('./news.router');
const userRouter = require('./user.router');
const authRouter = require('./auth.router');
const groupRouter = require('./group.router');
const examRouter = require('./exam.router');
const markRouter = require('./mark.router');

const router = Router();

router.use('/news', newsRouter);
router.use('/users', userRouter);
router.use('/auth', authRouter);
router.use('/group', groupRouter);
router.use('/exam', examRouter);
router.use('/mark', markRouter);

module.exports = router;