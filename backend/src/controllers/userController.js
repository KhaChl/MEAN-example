const User = require('../models/user');
const utils = require('../utils/hashpassword');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

/* obtener datos del usuario */
exports.getUser = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id });
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).send('Problemas de conexion');
    }
};

/* actualizar datos */
exports.updateUser = async (req, res) => {
    try {
        const { _id } = req.user;
        if (_id != req.params.id) return res.status(403).send('Usuario no autorizado');
        const { email } = req.body;
        const emailUser = await User.findOne({ email });
        if (emailUser) return res.status(401).send('Email ya registrado');
        await User.findByIdAndUpdate(req.params.id, { email: email });
        return res.status(200).json({ message: 'Email actualizado' });
    } catch (error) {
        return res.status(500).send('Problemas de conexion');
    }

};

/* actualizar contraseña */
exports.updatePassword = async (req, res) => {
    try {
        const { _id } = req.user;
        if (_id != req.params.id) return res.status(403).send('Usuario no autorizado');
        const { currentPassword, newPassword } = req.body;
        const user = await User.findOne({ _id: req.params.id });
        const match = await utils.comparePassword(currentPassword, user.password);
        if (match) {
            const newPasswordHashed = await utils.hashedPassword(newPassword);
            await User.findByIdAndUpdate(req.params.id, { password: newPasswordHashed });
            const token = jwt.sign({ _id: user._id, role: user.role }, config.secretKey, { expiresIn: '24 hours' });
            return res.status(200).json({ token, message: 'Contraseña actualizada' });
        } else {
            return res.status(401).send('Constraseña erronea');
        }
    } catch (error) {
        return res.status(500).send('Problemas de conexion');
    }
}

/* borrar su propio usuario */
exports.deleteUser = async (req, res) => {
    try {
        const { _id } = req.user;
        if (_id != req.params.id) return res.status(403).send('Usuario no autorizado');
        await User.findByIdAndDelete(req.params.id);
        return res.status(200);
    } catch (error) {
        return res.status(500).send('Problemas de conexion');
    }

};