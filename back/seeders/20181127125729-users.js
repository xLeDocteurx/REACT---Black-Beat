'use strict';

const bcrypt = require('bcrypt')
const serverConfig = require('../serverConfig.json')

module.exports = {
  up: (queryInterface, Sequelize) => {

    bcrypt.genSalt( serverConfig.bcrypt.saltRounds, (err, salt) => {
      bcrypt.hash('password', salt)
        .then((hash) => {
          return queryInterface.bulkInsert('Users', [{
            active: true,
            username: 'Admin',
            email: 'admin@gmail.com',
            password: hash,
            avatar: './logo.png',
            bio: 'Admin is hot and dangerous !',
            'createdAt': '2018-11-23 17:00:35',
            'updatedAt': '2018-11-23 17:00:35',
            'currentProjectId': 1
          },
          {
            active: true,
            username: 'LeDocteur',
            email: 'ledocteur@gmail.com',
            password: hash,
            avatar: './logo.png',
            bio: 'LeDocteur is hot and dangerous !',
            'createdAt': '2018-11-23 17:00:35',
            'updatedAt': '2018-11-23 17:00:35',
            'currentProjectId': 1
          },
          {
            active: false,
            username: 'Toto',
            email: 'toto@gmail.com',
            password: hash,
            avatar: './logo.png',
            bio: 'Toto is hot and dangerous !',
            'createdAt': '2018-11-23 17:00:35',
            'updatedAt': '2018-11-23 17:00:35',
            'currentProjectId': 1
          }
          ], {});
        })
    })

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
