'use strict'

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    active: DataTypes.BOOLEAN,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    bio: DataTypes.TEXT
  }, {})

  User.associate = function(models) {
    models.User.belongsTo(models.Project, {
      as: 'currentProject'
      // onDelete: "CASCADE"
    })
    models.User.hasMany(models.Project, {
      foreignKey: 'authorId'
    })

    models.User.belongsToMany(models.Project, {
      as: 'Contributions',
      through: 'Contributors',
      foreignKey: 'userId',
      otherKey: 'projectId'
    })
  }
  return User
}