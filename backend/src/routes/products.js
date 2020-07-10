const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/productController');
const utils = require('../utils/verifytoken')

router.get('/', productCtrl.getProducts);

router.get('/:id', productCtrl.getProduct);

router.post('/create', utils.verifyToken, productCtrl.createProduct);

router.put('/updateproduct/:id', utils.verifyToken, productCtrl.updateProduct);

router.delete('/delete/:id', utils.verifyToken, productCtrl.deleteProduct);

module.exports = router;