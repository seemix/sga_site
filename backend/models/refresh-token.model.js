const { Schema, model } = require('mongoose');

const refreshTokenSchema = new Schema({
    token: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' }

}, {
    timestamps: true
});

module.exports = model('refreshToken', refreshTokenSchema);