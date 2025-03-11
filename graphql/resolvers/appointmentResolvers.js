const { Appointment, User } = require('../../models');

const appointmentResolvers = {
  Query: {
    getAppointments: async () => {
      return await Appointment.findAll();
    },
  },
  Mutation: {
    bookAppointment: async (_, { patientId, doctorId, date }) => {
      const patient = await User.findByPk(patientId);
      const doctor = await User.findByPk(doctorId);
      if (!patient || !doctor) throw new Error('User not found');
      const appointment = await Appointment.create({ patientId, doctorId, date, status: 'Scheduled' });
      return appointment;
    },
  },
};

module.exports = appointmentResolvers;
