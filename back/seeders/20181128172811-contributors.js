'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contributors', [
    {
      userId: 1,
      projectId: 1,
      createdAt: '2018-11-23 17:00:35',
      updatedAt: '2018-11-23 17:00:35'
    },
    {
      userId: 1,
      projectId: 2,
      createdAt: '2018-11-23 17:00:35',
      updatedAt: '2018-11-23 17:00:35'
    },
    {
      userId: 2,
      projectId: 2,
      createdAt: '2018-11-23 17:00:35',
      updatedAt: '2018-11-23 17:00:35'
    },
    {
      userId: 2,
      projectId: 1,
      createdAt: '2018-11-23 17:00:35',
      updatedAt: '2018-11-23 17:00:35'
    }
], {});
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contributors', null, {});
  }
};
