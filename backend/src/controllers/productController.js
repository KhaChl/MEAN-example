const Product = require('../models/product');

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        return res.json(products);
    } catch (error) {
        return res.status(500).send('Problemas con el servidor');
    }
};

exports.getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        return res.json(product);
    } catch (error) {
        return res.status(500).send('Problemas con el servidor');
    }
};

exports.createProduct = async (req, res) => {
    try {
        const { role } = req.user;
        if (role != 'Admin') return res.status(403).send('Usuario no autorizado');
        const { name, description, price, imagePath, stock } = req.body;
        const newProduct = new Product({ name, description, price, imagePath, stock });
        await newProduct.save();
        return res.status(200).json({ message: 'Producto agregado' })
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const { role } = req.user;
        if (role != 'Admin') return res.status(500).send('Usuario no autorizado');
        const { name, description, price, imagePath, stock } = req.body;
        await Product.findByIdAndUpdate(req.params.id, { $set: { name, description, price, imagePath, stock } });
        res.status(200).json({ message: 'Producto actualizado' })
    } catch (error) {
        return res.status(500).send('Problemas con el servidor');
    }

};

exports.deleteProduct = async (req, res) => {
    try {
        const { role } = req.user;
        if (role != 'Admin') return res.status(403).send('Usuario no autorizado');
        await Product.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: 'Producto eliminado' })
    } catch (error) {
        res.status(500).send('Problemas con el servidor');
    }
};