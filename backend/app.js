const cors = require('cors');
const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const {PORT, MONGO_URL} = require('./configs/config');
const newsRouter = require('./routes/news.router');
const userRouter = require('./routes/user.router');
const authRouter = require('./routes/auth.router');

const app = express();
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(express.json());

app.use(express.urlencoded({extended: true}));
app.use('/news', newsRouter);
app.use('/users', userRouter);
app.use('/auth', authRouter);

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message || 'Unknown error',
        status: err.status || 500
    });
});


app.listen(PORT, () => {
    mongoose.connect(MONGO_URL).then(() => console.log('DB connected!')).catch((e) => console.log(e));
});