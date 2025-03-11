const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('./index');
const User = require('./user');

class Doctor extends Model {}

Doctor.init({
  specialty: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  availability: {
    type: DataTypes.JSON,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Doctor',
});

Doctor.belongsTo(User);

module.exports = Doctor;
