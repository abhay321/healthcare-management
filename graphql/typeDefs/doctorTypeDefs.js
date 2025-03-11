const { gql } = require('apollo-server-express');

const doctorTypeDefs = gql`
  type Doctor {
    id: ID!
    name: String!
    specialty: String!
  }

  type Query {
    getDoctors: [Doctor]
    getDoctorById(id: ID!): Doctor  # Add this line to define the query
  }

  type Mutation {
    addDoctor(name: String!, specialty: String!): Doctor
  }
`;

module.exports = doctorTypeDefs;
