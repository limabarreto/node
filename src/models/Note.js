const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./User');

const Note = sequelize.define('notes', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  conteudo: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

// Relacionamento: 1 usuário → N notas
User.hasMany(Note, { foreignKey: 'userId', onDelete: 'CASCADE' });
Note.belongsTo(User, { foreignKey: 'userId' });

module.exports = Note;
