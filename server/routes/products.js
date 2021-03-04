const express = require('express');
const router = express.Router();

const { Product } = require('../models/Product');

router.get('/', (req, res) => {
    Product.find({}).sort({'createdAt':-1}).exec((err, products) => {
        if(err) return res.status(400).json({success: false, err});

        return res.status(200).json({
            products: products
        })
    })
});

router.post('/', (req, res) => {
    const product = new Product(req.body);
    product.save((err, product) => {
        if(err) return res.status(400).json({success: false, err});

        return res.status(200).json({success: true, product: product})
    })
});

module.exports = router;