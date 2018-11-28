'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contributor = sequelize.define('Contributor', {
    userId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER
  }, {});
  Contributor.associate = function(models) {
    // associations can be defined here
  };
  return Contributor;
};