'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      username: 'Admin',
      email: 'admin@gmail.com',
      password: 'admin',
      avatar: './logo.png',
      bio: 'Admin is hot and dangerous !',
      'createdAt': '2018-11-23 17:00:35',
      'updatedAt': '2018-11-23 17:00:35'
    },
    {
      username: 'LeDocteur',
      email: 'ledocteur@gmail.com',
      password: 'ledocteur',
      avatar: './logo.png',
      bio: 'LeDocteur is hot and dangerous !',
      'createdAt': '2018-11-23 17:00:35',
      'updatedAt': '2018-11-23 17:00:35'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
