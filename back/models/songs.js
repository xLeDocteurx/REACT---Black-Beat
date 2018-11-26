'use strict';
module.exports = (sequelize, DataTypes) => {
  const songs = sequelize.define('songs', {
    name: DataTypes.STRING,
    path: DataTypes.STRING
  }, {});
  songs.associate = function(models) {
    // associations can be defined here
  };
  return songs;
};