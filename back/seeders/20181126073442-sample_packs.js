'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('sample_packs', [{
      name: 'Satin Charley',
    }], {});

    return queryInterface.bulkInsert('sample_packs', [{
      name: 'Bling It On',
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('sample_packs', null, {});
  }
};
