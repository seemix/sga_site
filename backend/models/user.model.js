const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: { type: String, trim: true, required: true, unique: true },
    password: { type: String, required: true },
    userName: { type: String, required: true },
   // userName: { String, trim: true, required: true },
}, {
    timestamps: true
});

module.exports = model('user', userSchema);