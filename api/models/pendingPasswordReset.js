const mongoose = require("mongoose")

const pendingPasswordResetSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: {type: String, required: true},
    userEmail: {type: String, required: true},
    timeStamp: {type: Number, required: true}
})
module.exports = mongoose.model('PendingPasswordReset', pendingPasswordResetSchema)