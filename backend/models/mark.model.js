const { Schema, model } = require('mongoose');

const markSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'user' },
    exam: { type: Schema.Types.ObjectId, ref: 'exam' },
    mark: { type: Number, required: true },
}, {
    timestamps: true
});

module.exports = model('mark', markSchema);