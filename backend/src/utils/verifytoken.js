const jwt = require('jsonwebtoken');
const config = require('../config/config');

/* verificar token */
exports.verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, config.secretKey, (err, user) => {
            if (err) return res.status(403).send('Usuario no autorizado');
            /* agrega user a solicitud */
            req.user = user;
            next();
        });
    } else {
        res.status(401).send('Usuario no autenticado')
    }
}