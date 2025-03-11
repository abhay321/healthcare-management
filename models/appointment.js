const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('./index');
const User = require('./user');

class Appointment extends Model {}

Appointment.init({
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('Scheduled', 'Completed', 'Cancelled'),
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Appointment',
});

Appointment.belongsTo(User, { as: 'patient' });
Appointment.belongsTo(User, { as: 'doctor' });

module.exports = Appointment;
