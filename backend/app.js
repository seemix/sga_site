const cors = require('cors');
const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const mainHandler = require('./errors/mainHandler');

const {PORT, MONGO_URL} = require('./configs/config');
const newsRouter = require('./routes/news.router');
const app = express();
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended: true}));
app.use('/news', newsRouter);
app.use('*', (req, res, next) => {
    next('route not found')
});
app.use(mainHandler);

app.listen(PORT, () => {
    mongoose.connect(MONGO_URL).then(() => console.log('DB connected!')).catch((e) => console.log(e));
});