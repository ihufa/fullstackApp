const jwt = require('jsonwebtoken')


module.exports = (req, res, next) => {
 try {
     const token = req.headers.authorization.split(" ")[1]
     console.log('authing... token:', token)
    const decoded = jwt.verify(token, "secret")
    console.log('decoded', decoded)
    req.userData = decoded
    next()
}    
     catch(error) {
     console.log('invalid token')
     return res.status(401).json({
         message: "invalid token"
     })
 }

}