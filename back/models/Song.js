'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('song', {
    name: DataTypes.STRING,
    path: DataTypes.STRING
  }, {});
  Song.associate = function(models) {
    // associations can be defined here
  };
  return Song;
};