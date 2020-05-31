const express = require('express');
const mongoose = require('mongoose')
const auth = require('../middleware/auth')
const Product = require('../models/product')
const router = new express.Router()

router.post('/ProductCreat', async (req, res) => {
    const product = new Product(req.body.newProdcut)
    try {
        await product.save()
        res.status(201).send({ product })
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/products', async (req, res) => {
    try {
        const products = await Product.find({})
        res.send(products)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.post('/deletprodcut', async (req, res) => {
    const id = req.body.id;
    console.log(id)
    try {
        await Product.findByIdAndDelete(id, (error, data) => {
            res.send(true);
        })
    } catch (e) {
        res.status(500).send(e)
    }
})

router.post('/updateproduct', async (req, res) => {
    const updates = Object.keys(req.body.newproduct.newp)
    const alloweUpdates = ['imagePath', 'title', 'description', 'price']
    const isValidOperation = updates.every((update) => alloweUpdates.includes(update))
    if (!isValidOperation) {
        return res.status(400).send({ eror: 'invalid updates!' })
    }
    try {
        const id = req.body.newproduct.oldId;
        const newproduct = await Product.findByIdAndUpdate(id, req.body.newproduct.newp)
        if (!newproduct) {
            return res.status(404).send()
        }
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router