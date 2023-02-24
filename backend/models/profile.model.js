const { Schema, model } = require('mongoose');

const formSchema = new Schema({
    surname: { type: String, trim: true, required: true },
    name: { type: String, trim: true, required: true },
    fatherName: { type: String, trim: true, required: false },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    viber: { type: Boolean, default: false },
    telegram: { type: Boolean, default: false },
    church: { type: String, trim: true },
    birthDate: { type: Date, required: true },
    repentanceDate: { type: Date, required: true },
    baptismDate: { type: Date, required: true },
    spouseName: { type: String, trim: true },
    children: { type: String, trim: true },
    siblings: { type: String, trim: true },
    ministry: { type: String, trim: true, required: true },
    minister: { type: String, trim: true, required: true },
    password: { type: String, default: '' },
    status: { type: String, enum: ['applicant', 'approved', 'rejected', 'graduate', 'expelled'], default: 'applicant' }
}, {
    timestamps: true
});

module.exports = model('profile', formSchema);