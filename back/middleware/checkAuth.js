const serverConfig = require('../serverConfig.json')
let models = require('../models')
const jwt = require('jsonwebtoken')

let checkAuth = (req, res, next) => {

  console.log('la requette passe par le middleware checkAuth')

  const token = req.header('Authorization')
  console.log('avec un token :')
  console.log(token)


  jwt.verify(token, serverConfig.jwt.secret, function(err, decoded) {
    if(err){res.status(401).send()}
    console.log(decoded) // bar

    models.User.findAll({
      where: {
        email: decoded.email
      }
    })
      .then((users) => {
        req.user = users[0]
        next()
      })
      .catch((e) => {
        res.status(401).send()
      })
  })
}

module.exports = checkAuth
