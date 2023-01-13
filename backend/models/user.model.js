const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    email: {type: String, trim: true, required: true, unique: true},
    password: {type: String, required: true},
    isActivated: {type: Boolean, default: false}
}, {
    timestamps: true
});

module.exports = model('user', userSchema);