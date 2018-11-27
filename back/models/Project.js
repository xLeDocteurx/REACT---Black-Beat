'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('project', {
    name: DataTypes.STRING
  }, {});
  // Project.belongsTo(User, {as:'author', foreignKey: 'fk_author'});
  Project.associate = function(models) {
    // associations can be defined here
  };
  return Project;
};