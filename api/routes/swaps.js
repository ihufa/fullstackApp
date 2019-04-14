const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")

const Swap = require("../models/swap")

router.post("/", (req, res, next) => {
  const swap = new Swap({
    _id: mongoose.Types.ObjectId(),
    requesterId: req.body.requesterId,
    requesterName: req.body.requesterName,
    receiverId: req.body.receiverId,
    receiverName: req.body.receiverName,
    productId: req.body.productId,
    plant: req.body.plant,
    time: Date.now(),
    seenByRequester: true,
    seenByReceiver: false,
    accepted: false,
    messages: { message: req.body.message, sender: req.body.requesterName }
  })
  swap
    .save()
    .then(result => {
      console.log(result)
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: err })
    })
})
router.get("/:userId", (req, res, next) => {
  Swap.find({ receiverId: req.params.userId })
    .sort({ time: -1 })
    .exec()
    .then(result => {
      console.log("swap", result)
      res.status(201).json({ result })
    })
})

router.delete("/:swapId", (req, res, next) => {
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
router.patch("/accept/:swapId", (req, res, next) => {
  const accepted = {
    accepted: true,
    seenByReceiver: true,
    seenByRequester: false
  }
  Swap.updateOne({ _id: req.params.swapId }, { $set: accepted })
    .exec()
    .then(result => {
      res.status(201).json({ result })
    })
    .catch(err => {
      res.status(404).json(err)
    })
})
router.patch("/:swapId", (req, res, next) => {
  Swap.updateOne(
    { _id: req.params.swapId },
    { $push: { messages: req.body } },
    {
      $set: {
        seenByRequester: req.body.requester,
        seenByReceiver: !req.body.requester
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
router.patch("/seen/:swapId", (req, res, next) => {
  if (req.body.requester) {
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
  }
})

module.exports = router