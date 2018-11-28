'use strict';

module.exports = (sequelize, DataTypes) => {
  const Sample_pack = sequelize.define('Sample_pack', {
    name: DataTypes.STRING
  }, {});
  // sample_pack.belongsToMany(sample, {through: 'sample_sample_pack'});
  Sample_pack.associate = function(models) {
    // associations can be defined here
  };
  return Sample_pack;
};