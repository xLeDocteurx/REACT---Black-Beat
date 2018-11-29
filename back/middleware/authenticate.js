let models = require('../models');

let authenticate = (req, res, next) => {

  models.User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((e) => {
      res.status(401).send();
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

module.exports = authenticate
