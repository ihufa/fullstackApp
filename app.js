const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


const orderRoutes = require('./api/routes/orders')
const productRoutes = require('./api/routes/products')
const userRoutes = require('./api/routes/users')

mongoose.connect(`mongodb://admin:admin123@mycluster-shard-00-00-m9k0o.mongodb.net:27017,mycluster-shard-00-01-m9k0o.mongodb.net:27017,mycluster-shard-00-02-m9k0o.mongodb.net:27017/test?ssl=true&replicaSet=MyCluster-shard-0&authSource=admin&retryWrites=true`)

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use((req, res, next) => {
res.header('Access-Control-Allow-Origin', '*')
res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
)
if (req.method === 'OPTIONS') {
    red.header('Access-Contro-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
    return res.status(200).json({})
}
next()
})

app.use('/products', productRoutes)
app.use('/orders', orderRoutes)
app.use('/signup', userRoutes)

app.use((req, res, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)

})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: "error.message"
        }
    })
})

module.exports = app