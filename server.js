const express = require("express")
const app = express()

const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const path = require("path")

const server = require("http").createServer()
const io = require("socket.io")({})
io.attach(server, {
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
})
server.listen(8989)
io.on("connect", onConnect)
let clients = []
function onConnect(socket) {
  if (socket.handshake.query.userId !== "undefined") {
    console.log(socket.id, "connected")
    clients.push({
      userId: socket.handshake.query.userId,
      userName: socket.handshake.query.userName,
      socketId: socket.id
    })
    console.log(clients)
    socket.on("message", message => {
      console.log("message received", message.receiverId)
      let receiver = message.receiverId
      let receiverClient
      for (let i = 0; i < clients.length; i++) {
        if (clients[i].userId === receiver) {
          receiverClient = clients[i].socketId
        }
      }
      console.log(clients[0].userId)
      socket.broadcast.to(receiverClient).emit("message")
    })
    socket.on("disconnect", () => {
      console.log("a client has disconnected")
      clients = clients.filter(el => el.socketId !== socket.id)
      console.log(clients)
    })
  }
}
var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Methods",
    "PATCH, GET, POST, PUT, DELETE, OPTIONS"
  )
  res.header("Access-Control-Allow-Headers", "Content-Type")
  next()
}

app.use(allowCrossDomain)

// Bodyparser Middleware
app.use(bodyParser.json())

// DB Config
const db = require("./config/keys").mongoURI

// Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true }) // Adding new mongo url parser
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err))

// Use Routes
const users = require("./api/routes/users")
const products = require("./api/routes/products")
const swaps = require("./api/routes/swaps")

app.use("/users", users)
app.use("/products", products)
app.use("/swaps", swaps)
app.use("/plants", express.static("uploads"))

// Serve static assets if in production
//if (process.env.NODE_ENV === "production") {
// Set static folder
app.use(express.static("client/build"))

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
})
//}

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))
app.use(express.static("client/public"))
