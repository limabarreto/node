const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('users', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  }
});

module.exports = User;
