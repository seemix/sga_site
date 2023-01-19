const { Schema, model } = require('mongoose');

const activateTokenSchema = new Schema({
    token: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' }

}, {
    timestamps: true
});

module.exports = model('activationToken', activateTokenSchema);