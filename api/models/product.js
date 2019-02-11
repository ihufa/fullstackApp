const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    message: {type: String, required: false},
    image: {type: String, required: true},
    user: {type: String, required: true}
})

module.exports = mongoose.model('Product', productSchema)