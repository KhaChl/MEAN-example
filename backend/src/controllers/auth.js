const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const utils = require('../utils/hashpassword');

/* registro */
exports.signUp = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        const emailUser = await User.findOne({ email });
        if (emailUser) {
            return res.status(401).send('Email ya registrado');
        } else {
            const newUser = new User({ email, password, role });
            newUser.password = await utils.hashedPassword(password);
            await newUser.save();
            const token = jwt.sign({ _id: newUser._id, role: newUser.role }, config.secretKey, { expiresIn: '24 hours' });
            return res.status(200).json({ token });
        }
    } catch (error) {
        return res.status(500).send('Problemas de conexion');
    }
};

/* ingresar */
exports.signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            const match = await utils.comparePassword(password, user.password);
            if (match) {
                const token = jwt.sign({ _id: user._id, role: user.role }, config.secretKey, { expiresIn: '24 hours' });
                return res.status(200).json({ token });
            } else {
                return res.status(403).send('Contraseña erronea');
            }
        } else {
            return res.status(401).send('Usuario no existe');
        }
    } catch (error) {
        return res.status(500).send('Problemas de conexion');
    }
};