'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('samples', [{
      name: 'kick_01',
      path: './factory_samples/mad_zack/Satin_Charly/kick1.wav'
    }], {});

    return queryInterface.bulkInsert('samples', [{
      name: 'kick_02',
      path: './factory_samples/mad_zack/Satin_Charly/kick2.wav'
    }], {});

    return queryInterface.bulkInsert('samples', [{
      name: 'snare',
      path: './factory_samples/mad_zack/Satin_Charly/snare.wav'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('samples', null, {});
  }
};
