'use strict';

module.exports = (sequelize, DataTypes) => {
  const Sample = sequelize.define('sample', {
    name: DataTypes.STRING,
    path: DataTypes.STRING
  }, {});
  // sample.belongsToMany(sample_pack, {through: 'sample_sample_pack'});
  Sample.associate = function(models) {
    // associations can be defined here
  };
  return Sample;
};