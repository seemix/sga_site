const { Schema, model } = require('mongoose');

const examSchema = new Schema({
    subject: { type: String, trim: true, required: true },
    date: { type: Date, required: true, default: new Date() },
    description: { type: String, required: false }
}, {
    timestamps: true
});

module.exports = model('exam', examSchema);