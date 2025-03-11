const { gql } = require('apollo-server-express');

const appointmentTypeDefs = gql`
  type Appointment {
    id: ID!
    date: String!
    status: String!
    patient: User!
    doctor: Doctor!
  }

  type Query {
    getAppointments: [Appointment]
  }

  type Mutation {
    bookAppointment(patientId: ID!, doctorId: ID!, date: String!): Appointment
  }
`;

module.exports = appointmentTypeDefs;
