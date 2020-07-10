const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: { type: String },
    password: { type: String },
    role: { type: String, enum: ['Admin', 'User']  }
}, {
    timestamps: true
});

module.exports = model('User', userSchema);