'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Projects', [{
      name: 'Welcome Project',
      createdAt: '2018-11-23 17:00:35',
      updatedAt: '2018-11-23 17:00:35',
      authorId: 1
    },
    {
      name: 'LeDocteur\'s Project',
      createdAt: '2018-11-23 17:00:35',
      updatedAt: '2018-11-23 17:00:35',
      authorId: 2
    },
    {
      name: 'Tardis\'s Project',
      createdAt: '2018-11-23 17:00:35',
      updatedAt: '2018-11-23 17:00:35',
      authorId: 2
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
