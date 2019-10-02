const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const checkAuth = require("../auth/checkAuth")
const User = require("../models/user")
const PendingPasswordReset = require("../models/pendingPasswordReset")
const ZIPS = require("../zips")
const sendMail = require('../email/emailService')

// router.get("/", checkAuth, (req, res, next) => {   //don't need this atm
//   User.find()
//     .exec()
//     .then(user => {
//       res.status(201).json(user)
//     })
//     .catch(err => {
//       res.status(500).json({ message: "Please log in" })
//     })
// })

router.post('/newpass', (req, res, next) => {
  console.log('newpass requested')
  const { password, id } = req.body
  PendingPasswordReset.findById(id)
    .exec()
    .then(result => {
      const newPass = bcrypt.hash(password, 10, (err, hash) => {
        if(err) {
          res.status(500).json({message:'hash failed'})
        }
        User.updateOne({ _id: result.userId }, { $set: { password: hash} })
        .exec()
        .then(re => {
          console.log('password updated')
        })
        .catch(err => {
          console.log('update failed')
          res.status(404)
      })
    })
  })
  .catch(err => {
    console.log('no pending reset found')
    res.status(404)
})
})

router.post('/resetlink/:email', (req, res, next) => {
  const { email } = req.params
  User.findOne({ email: email })
    .exec()
    .then(user => {
      const id = new mongoose.Types.ObjectId()
      const pendingPasswordReset = new PendingPasswordReset({
        _id: id,
        userId: user._id,
        userEmail: email,
        timeStamp: Date.now()
      })
      pendingPasswordReset.save()
      .then(result => {
        sendMail({
          type: 'RESET_PASSWORD_LINK',
          receiver: email,
          subject: 'Reset password',
          message: `Click here to reset password: http://planthood.dk/resetpassword/${id}`
        })
        res.status(200).json({message:'email sent'})
    })
    .catch(err => {
      console.log(err)
      res.status(500)
    })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({message:'email not found'})
    })
}
)

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

// router.delete("/", (req, res, next) => {   //Don't need this for now
//   const id = req.body._id

//   User.remove({ _id: id })
//     .exec()
//     .then(result => {
//       console.log("user deleted" + result)
//       res.status(200).json("User deleted!" + result)
//     })
//     .catch(err => {
//       console.log({ error: err })
//     })
// })
router.patch("/email", checkAuth, (req, res, next) => {
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

router.patch("/zip", checkAuth, (req, res, next) => {
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
