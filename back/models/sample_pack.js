'use strict';
module.exports = (sequelize, DataTypes) => {
  const sample_pack = sequelize.define('sample_pack', {
    name: DataTypes.STRING
  }, {});
  // sample_pack.belongsToMany(sample, {through: 'sample_sample_pack'});
  sample_pack.associate = function(models) {
    // associations can be defined here
  };
  return sample_pack;
};