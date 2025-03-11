// doctorResolvers.js
const { Doctor } = require('../../models'); // Adjust path as necessary

const doctorResolvers = {
  Query: {
    getDoctors: async () => {
      try {
        return await Doctor.findAll();
      } catch (error) {
        console.error("Error fetching doctors:", error);
        throw new Error("Failed to fetch doctors");
      }
    },
    getDoctorById: async (parent, { id }) => {
      try {
        return await Doctor.findByPk(id);
      } catch (error) {
        console.error("Error fetching doctor:", error);
        throw new Error("Failed to fetch doctor");
      }
    },
  },

  Mutation: {
    addDoctor: async (parent, { name, specialty }) => {
      try {
        const newDoctor = await Doctor.create({ name, specialty });
        return newDoctor;
      } catch (error) {
        console.error("Error adding doctor:", error);
        throw new Error("Failed to add doctor");
      }
    },
  },
};

module.exports = doctorResolvers;
