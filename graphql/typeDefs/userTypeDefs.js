const { gql } = require('apollo-server-express');

const userTypeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    role: String!
  }

  type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }

  type Mutation {
    registerUser(name: String!, email: String!, password: String!, role: String!): User
    login(email: String!, password: String!): String # Returns JWT token
  }
`;

module.exports = userTypeDefs;
