require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const apiRouter = require('./routes/api.router')
const { PORT, MONGO_URL } = require('./configs/config');

const app = express();
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(apiRouter);

app.use((err, req, res,next) => {
    res.status(err.status || 500).json({
        message: err.message || 'Unknown error',
        status: err.status || 500
    });
});

app.listen(PORT, () => {
    mongoose.connect(MONGO_URL).then(() => console.log('DB connected!')).catch((e) => console.log(e));
});