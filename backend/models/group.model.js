const { Schema, model } = require('mongoose');

const groupSchema = new Schema({
    name: { type: String, trim: true, required: true, unique: true },
    status: { type: Boolean, default: true },
    description: { type: String, required: false }
}, {
    timestamps: true
});

module.exports = model('group', groupSchema);