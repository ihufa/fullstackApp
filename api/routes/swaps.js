const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Swap = require('../models/swap')

router.post('/', (req, res, next) => {
    const swap = new Swap({
        _id: mongoose.Types.ObjectId(),
        requesterId: req.body.requesterId,
        requesterName: req.body.requesterName,
        receiverId: req.body.receiverId,
        receiverName: req.body.receiverName,
        productId: req.body.productId,
        message: req.body.message,
        plant: req.body.plant,
        seen: false,
        accepted: false
    })
    swap
        .save()
        .then(result => {
            console.log(result)
            res.status(200).json(result)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ "error": err })
        })
})
router.get('/:userId', (req, res, next) => {
    Swap.find({ requesterId: req.params.userId })
        .exec()
        .then(result => {
            console.log("swap", result)
            res.status(201).json({ result })
        })
})

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "deleted"
    })
})


module.exports = router
