'use strict'

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    bio: DataTypes.TEXT
  }, {})

  User.generateAuthToken = function(secret) {

    console.log('on génère un token')
    // const user = this
    return jwt.sign({id: this.id, user: this}, secret,
      { 
        algorithm: 'RS256',
        expiresIn: '24h'
      }
      // , 
      // (err, token) => {
      //   // if(err) console.log(err)
      //   console.log(token)
      // }
    )
  }

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