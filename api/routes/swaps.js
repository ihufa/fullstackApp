const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const checkAuth = require("../auth/checkAuth")
const Swap = require("../models/swap")
const sendMail = require('../email/emailService')

router.post("/", checkAuth, (req, res, next) => {
  const clients = req.app.get('clients')
  const swap = new Swap({
    _id: mongoose.Types.ObjectId(),
    requesterId: req.body.requesterId,
    requesterName: req.body.requesterName,
    requesterEmail: req.body.requesterEmail,
    receiverId: req.body.receiverId,
    receiverName: req.body.receiverName,
    receiverEmail: req.body.receiverEmail,
    productId: req.body.productId,
    plant: req.body.plant,
    time: Date.now(),
    seenByRequester: true,
    seenByReceiver: false,
    accepted: false,
    messages: {
      message: req.body.message,
      sender: req.body.requesterName,
      time: Date.now()
    }
  })
  swap
    .save()
    .then(result => {
      console.log(result)
      res.status(200).json(result)
      if(clients.filter(el => (
        el.userId === req.body.receiverId
      )).length === 0) {
      sendMail({
        type: 'REQUEST_SWAP',
        receiver: req.body.receiverEmail,
        subject: `${req.body.requesterName} wants to swap with you!`
      })
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: err })
    })
})

router.get("/:userId", checkAuth, (req, res, next) => {
  let results
  Swap.find({ receiverId: req.params.userId })
    .sort({ time: -1 })
    .exec()
    .then(result1 => {
      results = result1

      Swap.find({ requesterId: req.params.userId })
        .sort({ time: -1 })
        .exec()
        .then(result2 => {
          results = results.concat(result2)
          res.status(201).json({ results })
        })
        .catch(() => console.log("fetching swaps error"))
    })
    .catch(() => console.log("fetching swaps error"))
})

router.delete("/:swapId", checkAuth, (req, res, next) => {
  Swap.deleteOne({ _id: req.params.swapId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "deleted"
      })
    })
    .catch(err => {
      res.status(404).json(err)
    })
})
router.patch("/accept/:swapId", checkAuth, (req, res, next) => {
  console.log('req.body', req.body)
  const clients = req.app.get('clients')
  const accepted = {
    accepted: true,
    seenByReceiver: true,
    seenByRequester: false
  }
  Swap.updateOne({ _id: req.params.swapId }, { $set: accepted })
    .exec()
    .then(result => {
      res.status(201).json({ result })
      if(clients.filter(el => (
        el.userId === req.body.requesterId
      )).length === 0) {
      sendMail({
        type: 'ACCEPT_SWAP',
        receiver: req.body.requesterEmail,
        subject: 'Somebody agreed to swap with you!'
      })
      }
    })
    .catch(err => {
      res.status(403).json({err})
    })
})
router.patch("/:swapId", (req, res, next) => {
  const clients = req.app.get('clients')
  console.log('req.body', req.body)
  Swap.updateOne(
    { _id: req.params.swapId },
    {
      $push: { messages: req.body },
      $set: {
        seenByRequester: req.body.requester,
        seenByReceiver: !req.body.requester
      }
    }
    )
    .exec()
    .then(result => {
      res.status(201).json({ result })
      if(clients.filter(el => (
        el.userId === req.body.receiverId
      )).length === 0) {
      sendMail({
        type: 'MESSAGE_NOTIFICATION',
        receiver: req.body.receiverEmail,
        sender: req.body.sender,
        message: req.body.message,
        subject: `New message from ${req.body.sender}`
      })
      }
    })
    .catch(err => {
      res.status(404).json(err)
    })
})
router.patch("/seen/:swapId", (req, res, next) => {
  Swap.updateOne(
    { _id: req.params.swapId },
    {
      $set: {
        seenByRequester: true,
        seenByReceiver: true
      }
    }
  )
    .exec()
    .then(result => {
      res.status(201).json({ result })
    })
    .catch(err => {
      res.status(404).json(err)
    })
})

module.exports = router
