const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const checkAuth = require("../auth/checkAuth")
const User = require("../models/user")

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
        email: req.body.email
      })
      user
        .save()
        .then(results => {
          return res.status(201).json("user created")
        })
        .catch(err => {
          res.status(500).json("invalid email adress")
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
              user: user[0].email,
              userId: user[0]._id
            },
            "secret",
            { expiresIn: "1d" }
          )
          console.log("login successful" + token)
          return res.status(200).json({
            message: "login succesful",
            securityToken: token,
            userEmail: user[0].email,
            userZip: user[0].zip,
            userName: user[0].name
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
  User.updateOne({ email: req.body.email }, { $set: { email: req.body.newEmail } })
    .exec()
    .then(result => {
      console.log(result)
      res.status(204).json("email updated")

    })

})
router.patch("/zip", (req, res, next) => {
  User.updateOne({ email: req.body.email }, { $set: { zip: req.body.zip } })
    .exec()
    .then(result => {
      console.log(result)
      res.status(204).json("zip updated")

    })
})

module.exports = router
