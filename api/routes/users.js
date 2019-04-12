const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const checkAuth = require("../auth/checkAuth")
const User = require("../models/user")
const ZIPS = require("../zips")

router.get("/", checkAuth, (req, res, next) => {
  User.find()
    .exec()
    .then(user => {
      res.status(201).json(user)
    })
    .catch(err => {
      res.status(500).json({ message: "Please log in" })
    })
})

router.post("/", (req, res, next) => {
  console.log("post request received")
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length > 0) {
        return res.status(422).json("email already exists")
      }
    })
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      console.log("hash failed")
      return res.status(500).json({ error: err })
    } else {
      const user = new User({
        _id: new mongoose.Types.ObjectId(),
        password: hash,
        name: req.body.name,
        zip: req.body.zip,
        email: req.body.email,
        city: req.body.city
      })
      user
        .save()
        .then(results => {
          return res.status(201).json("user created")
        })
        .catch(err => {
          res.status(500).json(err)
        })
    }
  })
})

router.post("/login", (req, res, then) => {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(401).json("wrong username")
      }

      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json("login failed")
        }
        if (result) {
          const token = jwt.sign(
            {
              userId: user[0]._id
            },
            "secret",
            { expiresIn: "365d" }
          )
          console.log("login successful" + token)
          return res.status(200).json({
            message: "login succesful",
            securityToken: token,
            userEmail: user[0].email,
            userZip: user[0].zip,
            userName: user[0].name,
            userId: user[0]._id,
            userCity: user[0].city
          })
        }
        console.log("wrong password")
        return res.status(401).json("wrong password")
      })
    })
    .catch(err => {
      res.status(500).json("something went wrong")
    })
})

router.delete("/", (req, res, next) => {
  const id = req.body._id

  User.remove({ _id: id })
    .exec()
    .then(result => {
      console.log("user deleted" + result)
      res.status(200).json("User deleted!" + result)
    })
    .catch(err => {
      console.log({ error: err })
    })
})
router.patch("/email", (req, res, next) => {
  console.log(req.body)
  User.updateOne({ _id: req.body.id }, { $set: { email: req.body.input } })
    .exec()
    .then(() => {
      User.findOne({ _id: req.body.id })
        .exec()
        .then(user => {
          let newUser = {
            name: user.name,
            zip: user.zip,
            city: user.city,
            email: user.email,
            id: user._id
          }
          return res.status(200).json(newUser)
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})

router.patch("/zip", (req, res, next) => {
  let city = ZIPS.filter(el => el.zip == req.body.input)[0].city
  User.updateOne({ _id: req.body.id }, { $set: { city: city, zip: req.body.input } })
    .exec()
    .then(() => {
      User.findOne({ _id: req.body.id })
        .exec()
        .then(user => {
          let newUser = {
            name: user.name,
            zip: user.zip,
            city: user.city,
            email: user.email,
            id: user._id
          }
          return res.status(200).json(newUser)
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})

module.exports = router
