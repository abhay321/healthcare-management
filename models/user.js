const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('./index');

class User extends Model {}

User.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('patient', 'doctor'),
    defaultValue: 'patient',
  },
}, {
  sequelize,
  modelName: 'User',
});

module.exports = User;
