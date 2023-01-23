const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: { type: String, trim: true, required: true, unique: true },
    password: { type: String, required: true },
    userName: { type: String, required: true },
    group: { type: Schema.Types.ObjectId, ref: 'group' }
}, {
    timestamps: true
});

module.exports = model('user', userSchema);