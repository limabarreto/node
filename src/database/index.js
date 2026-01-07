const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodedb', 'nodeuser', '1123', {
  host: 'localhost',
  dialect: 'postgres',
  logging: true
});

module.exports = sequelize;
