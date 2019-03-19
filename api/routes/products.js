const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
const Product = require("../models/product")

const checkAuth = require("../auth/checkAuth")
const multer = require("multer")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/")
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  }
})
const fileFilter = (req, file, cb) => {
  // reject a file
  console.log(file)
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
})

router.get("/", (req, res, next) => {
  console.log("products GET requested")
  Product.find()
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        products: docs
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
router.post("/search", (req, res, next) => {
  console.log("search initiated")
  console.log(req.body)
  let searchParam = new RegExp(req.body.searchParam, "i")
  Product.find({ message: searchParam })

    .exec()
    .then(prod => {
      const response = {
        count: prod.length,
        products: prod
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

router.post("/", checkAuth, upload.single("productImage"), (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    image: req.file.filename,
    name: req.body.name,
    message: req.body.message,
    user: req.body.user,
    zip: req.body.zip,
    time: Date.now(),
    toggleMenu: false,
    flagged: false,
    hidden: false
  })
  product
    .save()
    .then(result => {
      res.status(201).json({ "product added": result })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        err
      })
    })
})
router.get("/:productId", (req, res, next) => {
  const id = req.params.productId
  Product.findById(id)
    .exec()
    .then(doc => {
      console.log("from database" + doc)
      if (doc) {
        res.status(200).json(doc)
      } else {
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

router.patch("/", (req, res, next) => {
  const id = req.body.id
  const updateOps = { hidden: true }
  Product.updateOne({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      console.log(result)
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: err })
    })
})

router.delete("/:id", (req, res, next) => {
  const id = req.params.id

  Product.deleteOne({ _id: id })
    .exec()
    .then(result => {
      console.log(result)
      res.status(200).json(result)
    })
    .catch(err => {
      console.log({ error: err })
    })
})

module.exports = router
