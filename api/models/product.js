const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  message: { type: String, required: false },
  image: { type: String, required: true },
  userId: { type: String, required: false },
  userName: { type: String, required: true },
  userCity: { type: String, required: true },
  zip: { type: Number, required: true },
  time: { type: Number, required: true },
  toggleMenu: { type: Boolean, required: true },
  hidden: { type: Boolean, required: true },
  flagged: { type: Boolean, required: true },
  requestedBy: { type: Number, required: false },
  requestSeen: { type: Boolean, required: false },
  longitude: { type: Number, required: true },
  latitude: { type: Number, required: true }
})

module.exports = mongoose.model("Product", productSchema)
