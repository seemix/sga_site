const { Schema, model } = require('mongoose');

const newsSchema = new Schema({
    title: { type: String, trim: true, required: true },
    text: { type: String, trim: true, required: true },
    image: { type: String, required: false },
}, {
    timestamps: true
});

module.exports = model('news', newsSchema);