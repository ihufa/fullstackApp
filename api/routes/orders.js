const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Order = require('../models/order')  

router.get('/', (req, res, next) => {
    Order.find()
    .exec()
    .then(docs => {
        res.status(200).json(docs)
    })
    .catch(err => 
        res.stats(500).json(err))
})
router.post('/', (req, res, next) => {
    const order = new Order({
        _id: mongoose.Types.ObjectId(),
        quantity: req.body.quantity,
        product: req.body.productId
    })
    order
    .save()
    .then(result => {
        console.log(result)
        res.status(200).json(result)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({"error":err})
    })
})
router.get('/:orderId', (req, res, next) => {
        res.status(201).json({
            message: "order details",
            id: req.params.orderId
        })
    })

router.patch('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: "deleted",
        id: req.params.orderId
    })
})

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "deleted"
    })
})


module.exports = router
