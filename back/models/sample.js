'use strict';

const sample_pack = require('./sample_pack');

module.exports = (sequelize, DataTypes) => {
  const sample = sequelize.define('sample', {
    name: DataTypes.STRING,
    path: DataTypes.STRING
  }, {});
  // sample.belongsToMany(sample_pack, {through: 'sample_sample_pack'});
  sample.associate = function(models) {
    // associations can be defined here
  };
  return sample;
};