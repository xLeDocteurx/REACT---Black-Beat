'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('Samples', [{
        name: 'kick_01',
        path: './factory_samples/mad_zack/Satin_Charly/kick1.wav',
        'createdAt': '2018-11-23 17:00:35',
        'updatedAt': '2018-11-23 17:00:35'
      },
      {
        name: 'kick_02',
        path: './factory_samples/mad_zack/Satin_Charly/kick2.wav',
        'createdAt': '2018-11-23 17:00:35',
        'updatedAt': '2018-11-23 17:00:35'
      },
      {
        name: 'snare',
        path: './factory_samples/mad_zack/Satin_Charly/snare.wav',
        'createdAt': '2018-11-23 17:00:35',
        'updatedAt': '2018-11-23 17:00:35'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Samples', null, {});
  }
};
