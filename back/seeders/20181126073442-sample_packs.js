'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Sample_packs', [{
      name: 'Satin Charley',
      'createdAt': '2018-11-23 17:00:35',
      'updatedAt': '2018-11-23 17:00:35'
    },
    {
      name: 'Bling It On',
      'createdAt': '2018-11-23 17:00:35',
      'updatedAt': '2018-11-23 17:00:35'
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Sample_packs', null, {});
  }
};
