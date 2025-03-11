const userTypeDefs = require('./typeDefs/userTypeDefs');
const appointmentTypeDefs = require('./typeDefs/appointmentTypeDefs');
const doctorTypeDefs = require('./typeDefs/doctorTypeDefs'); // Ensure this is imported

const userResolvers = require('./resolvers/userResolvers');
const appointmentResolvers = require('./resolvers/appointmentResolvers');
const doctorResolvers = require('./resolvers/doctorResolvers'); // Ensure this is imported

const typeDefs = [userTypeDefs, appointmentTypeDefs, doctorTypeDefs]; // Include doctorTypeDefs here
const resolvers = [userResolvers, appointmentResolvers, doctorResolvers]; // Include doctorResolvers here

module.exports = { typeDefs, resolvers };
