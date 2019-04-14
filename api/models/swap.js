const mongoose = require("mongoose")

const swapSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  requesterId: { type: mongoose.Schema.Types.ObjectId, required: true },
  requesterName: { type: String, required: true },
  receiverId: { type: mongoose.Schema.Types.ObjectId, required: true },
  receiverName: { type: String, required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, required: true },
  messages: { type: Array },
  accepted: { type: Boolean, required: true },
  seenByRequester: { type: Boolean, required: true },
  seenByReceiver: { type: Boolean, required: true },
  plant: { type: String, required: true },
  time: { type: Number, required: true }
})

module.exports = mongoose.model("Swap", swapSchema)
