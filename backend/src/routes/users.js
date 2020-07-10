const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userController');
const utils = require('../utils/verifytoken')

router.put('/updateuser/:id', utils.verifyToken, userCtrl.updateUser);

router.put('/updatepassword/:id', utils.verifyToken, userCtrl.updatePassword)

router.delete('/delete/:id', utils.verifyToken, userCtrl.deleteUser);

router.get('/:id', utils.verifyToken, userCtrl.getUser);

module.exports = router;