const express = require('express')
const mongoose = require('mongoose')
const checkAuth = require('../auth/checkAuth')

const Product = require('../models/product')
const router = express.Router()

router.get('/', (req, res, next) => {
    Product.find()
    .select("product quantity _id")
    .populate("name")
    .exec()
    .then(docs => {
        const response = {
            count: docs.length,
            products: docs.map(doc => {
                return {
                    name: doc.name,
                    price: doc.price,
                    _id: doc._id,
                    request: {
                        type: 'GET',
                        url: `http://localhost:3000/products/${doc._id}`
                    }
                }
            })
        }

        res.status(200).json(response)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error: err
        })
    })
    })
router.post('/', checkAuth, (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    })
    product
    .save()
    .then(results => {
        console.log(result)
    })
    .catch(err => console.log(err))
    res.status(201).json({
        message: 'product added',
        createdProduct: product
    })
})
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId
    Product.findById(id)
    .exec()
    .then(doc => {
        console.log("from database" + doc)
        if(doc)
        {res.status(200).json(doc)}
        else {
            res.status(404).json({
                message: "no entry found"
            })
        }
    })
    .catch(err => {
        console.log(err.message)
        res.status(500).json({
            error: err.message
        })
    })
})

router.patch('/:productId', (req, res, next) => {
    const id = req.params.productId
    const updateOps = {}
    for( const ops of req.body) {
        updateOps[ops.propName] = ops.value
 }

    Product.update({_id: id}, {$set: updateOps})
    .exec()
    .then(result => {
        console.log(result)
        res.status(200).json(result)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({"error":err})
 })

})

router.delete('/:productId', (req, res, next) => {
    const id = req.params.productId

    Product.remove({_id: id})
    .exec()
    .then(result => {
        console.log(result)
        res.status(200).json(result)})
    .catch(err => {
        console.log({error: err})
    })
})


module.exports = router