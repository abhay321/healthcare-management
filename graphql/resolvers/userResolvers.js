const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../../models');
const { ApolloError } = require('apollo-server-express');
const { generateToken } = require('../../utils/auth');

const userResolvers = {
  Query: {
    getUser: async (_, { id }) => {
      return await User.findByPk(id);
    },
    getUsers: async () => {
      return await User.findAll();
    },
  },
  Mutation: {
    registerUser: async (_, { name, email, password, role }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({ name, email, password: hashedPassword, role });
      return newUser;
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ where: { email } });
      if (!user) throw new ApolloError('User not found', 'USER_NOT_FOUND');
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) throw new ApolloError('Invalid credentials', 'INVALID_CREDENTIALS');
      return generateToken(user);
    },
  },
};

module.exports = userResolvers;
