const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
const Product = require("../models/product")
const sharp = require("sharp")

const checkAuth = require("../auth/checkAuth")
const multer = require("multer")

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/")
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + file.originalname + ".jpeg")
  }
})
const fileFilter = (req, file, cb) => {
  // reject a file

  if (
    file.mimetype === "image/jpeg" //|| file.mimetype === "image/png"   currently .jpeg is added to all files, not .png
  ) {
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
}).single("productImage")

router.post("/", checkAuth, upload, (req, res, next) => {
  console.log(req.file)

  sharp(req.file.path)
    .resize(440, 440)
    .toFile("./uploads/resized/" + req.file.filename, err => {
      if (!err) console.log("sharp worked")

      const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        image: req.file.filename,
        name: req.body.name,
        message: req.body.message,
        userId: req.body.userId,
        userName: req.body.userName,
        zip: req.body.zip,
        userCity: req.body.userCity,
        longitude: req.body.long,
        latitude: req.body.lat,
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
})

router.post("/sort/time", (req, res, next) => {
  console.log("products latest sort requested")
  Product.aggregate([
    {
      $project: {
        _id: "$_id",
        image: "$image",
        message: "$message",
        name: "$name",
        userId: "$userId",
        userName: "$userName",
        zip: "$zipv",
        userCity: "$userCity",
        longitude: "$longitude",
        latitude: "$latitude",
        time: "$time",
        toggleMenu: "$toggleMenu",
        flagged: "$flagged",
        hidden: "$hidden"
      }
    },
    { $sort: { time: -1 } },
    { $skip: req.body.count[0] },
    { $limit: req.body.count[1] }
  ])

    .then(result => {
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        error: err
      })
    })
})
router.post("/sort/distance", (req, res, next) => {
  console.log("products distance sort requested")
  console.log(req.body.location.long)
  Product.aggregate([
    { $match: {} },
    {
      $project: {
        dist: {
          $sqrt: {
            $sum: [
              {
                $pow: [{ $subtract: ["$longitude", req.body.location.long] }, 2]
              },
              {
                $pow: [{ $subtract: ["$latitude", req.body.location.lat] }, 2]
              }
            ]
          }
        },
        _id: "$_id",
        image: "$image",
        message: "$message",
        name: "$name",
        userId: "$userId",
        userName: "$userName",
        zip: "$zipv",
        userCity: "$userCity",
        longitude: "$longitude",
        latitude: "$latitude",
        time: "$time",
        toggleMenu: "$toggleMenu",
        flagged: "$flagged",
        hidden: "$hidden"
      }
    },
    { $sort: { dist: 1 } },
    { $skip: req.body.count[0] },
    { $limit: req.body.count[1] }
  ])

    .then(result => {
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        error: err
      })
    })
})
router.post("/sort/suggested", (req, res, next) => {
  console.log("products suggested sort requested")
  console.log(req.body.location.long)
  let start = req.body.count[0]
  let number = req.body.count[1]
  Product.aggregate([
    { $match: {} },
    {
      $project: {
        irrelevancy: {
          // calculated as (dist in degrees^2 * 400) + (hours since upload). the weight should prolly be adjusted later
          $add: [
            {
              $multiply: [
                {
                  $sum: [
                    {
                      $pow: [
                        { $subtract: ["$longitude", req.body.location.long] },
                        2
                      ]
                    },
                    {
                      $pow: [
                        { $subtract: ["$latitude", req.body.location.lat] },
                        2
                      ]
                    }
                  ]
                },
                400
              ]
            },

            {
              $divide: [{ $subtract: [Date.now(), "$time"] }, 1000 * 60 * 60]
            }
          ]
        },
        _id: "$_id",
        image: "$image",
        message: "$message",
        name: "$name",
        userId: "$userId",
        userName: "$userName",
        zip: "$zipv",
        userCity: "$userCity",
        longitude: "$longitude",
        latitude: "$latitude",
        time: "$time",
        toggleMenu: "$toggleMenu",
        flagged: "$flagged",
        hidden: "$hidden"
      }
    },
    { $sort: { irrelevancy: 1 } },
    { $skip: req.body.count[0] },
    { $limit: req.body.count[1] }
  ])
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        error: err
      })
    })
})
router.post("/search", (req, res, next) => {
  console.log("products search requested")
  console.log(req.body)
  let searchParam = new RegExp(req.body.searchParam, "i")
  Product.aggregate([
    { $match: { name: searchParam } },
    {
      $project: {
        irrelevancy: {
          // calculated as (dist in degrees^2 * 400) + (hours since upload). the weight should prolly be adjusted later
          $add: [
            {
              $multiply: [
                {
                  $sum: [
                    {
                      $pow: [
                        { $subtract: ["$longitude", req.body.location.long] },
                        2
                      ]
                    },
                    {
                      $pow: [
                        { $subtract: ["$latitude", req.body.location.lat] },
                        2
                      ]
                    }
                  ]
                },
                400
              ]
            },

            {
              $divide: [{ $subtract: [Date.now(), "$time"] }, 1000 * 60 * 60]
            }
          ]
        },
        _id: "$_id",
        image: "$image",
        message: "$message",
        name: "$name",
        userId: "$userId",
        userName: "$userName",
        zip: "$zipv",
        userCity: "$userCity",
        longitude: "$longitude",
        latitude: "$latitude",
        time: "$time",
        toggleMenu: "$toggleMenu",
        flagged: "$flagged",
        hidden: "$hidden"
      }
    },
    { $sort: { irrelevancy: 1 } },
    { $skip: req.body.count[0] },
    { $limit: req.body.count[1] }
  ])
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        error: err
      })
    })
})
router.post("/search/nouser", (req, res, next) => {
  console.log("products search requested")
  console.log(req.body)
  let searchParam = new RegExp(req.body.searchParam, "i")
  Product.aggregate([
    { $match: { name: searchParam } },
    {
      $project: {
        _id: "$_id",
        image: "$image",
        message: "$message",
        name: "$name",
        userId: "$userId",
        userName: "$userName",
        zip: "$zipv",
        userCity: "$userCity",
        longitude: "$longitude",
        latitude: "$latitude",
        time: "$time",
        toggleMenu: "$toggleMenu",
        flagged: "$flagged",
        hidden: "$hidden"
      }
    },
    { $sort: { irrelevancy: 1 } },
    { $skip: req.body.count[0] },
    { $limit: req.body.count[1] }
  ])
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        error: err
      })
    })
})

router.get("/:userId", (req, res, next) => {
  const id = req.params.userId
  Product.find({ userId: id })
    .sort({ time: -1 }) // I dunno why sort('-time') gives products with biggest first, when it starts with smallest with plain Product.find()
    .exec()
    .then(result => {
      if (result) {
        res.status(200).json(result)
      } else {
        res.status(404).json({
          message: "no plants"
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

router.patch("/hide", (req, res, next) => {
  const id = req.body.id
  const updateOps = { hidden: true }
  Product.updateOne({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ error: err })
    })
})
router.patch("/show", (req, res, next) => {
  const id = req.body.id
  const updateOps = { hidden: false }
  Product.updateOne({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
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
      res.status(200).json(result)
    })
    .catch(err => {
      console.log({ error: err })
    })
})

module.exports = router
