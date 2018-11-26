'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sample_sample_pack', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        sampleId: {
          type: Sequelize.INTEGER
        },
        sample_packId: {
          type: Sequelize.INTEGER
        },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('sample_sample_pack');
  }
};
