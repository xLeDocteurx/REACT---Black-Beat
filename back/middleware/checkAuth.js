const serverConfig = require('../serverConfig.json')
let models = require('../models');
const jwt = require('jsonwebtoken')

let checkAuth = (req, res, next) => {

  const token = req.header('Authorization')

  jwt.verify(token, serverConfig.jwt.secret, function(err, decoded) {
    console.log(decoded) // bar

    models.User.findAll({
      where: {
        email: decoded.email
      }
    })
      .then((users) => {
        req.user = users[0];
        next();
      })
      .catch((e) => {
        res.status(401).send();
      });
  });


  // let token = req.header('x-auth');

  // let user = User.findByToken(token).then((user) => {
  //   if(!user){
  //     return Promise.reject();
  //   }

    // req.user = user;
    // req.token = token;
    // next();
  // }).catch((e) => {
  //   res.status(401).send();
  // });
}

module.exports = checkAuth
