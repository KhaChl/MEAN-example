const bcrypt = require('bcrypt');
const config = require('../config/config');

exports.hashedPassword = async (password) => {
    try {
        const hash = await bcrypt.hash(password, config.salt);
        return hash;
    } catch (error) {
        return error;
    }
};

exports.comparePassword = async (passwordSignIn, passwordUser) => {
    try {
        const match = await bcrypt.compare(passwordSignIn,passwordUser);
        return match;
    } catch (error) {
        return error
    }
};