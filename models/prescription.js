const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('./index');
const Appointment = require('./appointment');

class Prescription extends Model {}

Prescription.init({
  medication: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dosage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Prescription',
});

Prescription.belongsTo(Appointment);

module.exports = Prescription;
