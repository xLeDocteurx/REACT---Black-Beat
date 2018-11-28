'use strict'

module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING
  }, {})
  // Project.belongsTo(User, {as:'author', foreignKey: 'fk_author'});
  Project.associate = function(models) {
    // associations can be defined here
    models.Project.belongsTo(models.User, {
      as: 'author'
    })

    models.Project.belongsToMany(models.User, {
      as: 'contributors',
      through: 'Contributors',
      foreignKey: 'projectId',
      otherKey: 'userId'
    })
  }
  return Project
}