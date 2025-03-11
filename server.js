const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { sequelize } = require('./models');
const dotenv = require('dotenv');
dotenv.config();

const { typeDefs, resolvers } = require('./graphql');

// Initialize Express
const app = express();

// Initialize Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  // Sync Sequelize models with the database
  await sequelize.sync({ force: false });

  app.listen({ port: 4000 }, () =>
    console.log(`Server is running at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
