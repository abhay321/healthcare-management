Healthcare Management System

A GraphQL-based healthcare management system that allows users to manage patients, doctors, appointments, prescriptions, and medical records. This system provides features such as adding doctors, managing appointments, and prescribing medicines.
Features

    Users: Patients and doctors with separate roles.
    Appointments: Patients can book appointments with doctors.
    Doctors: Doctors can have specialties, availability slots, and reviews.
    Prescriptions: Doctors can prescribe medication to patients after consultations.
    Medical Records: Patients can access their medical history.

Project Structure

The project is organized as follows:

/healthcare-management
|-- /graphql
|   |-- /typeDefs
|   |   |-- userTypeDefs.js
|   |   |-- doctorTypeDefs.js
|   |   |-- appointmentTypeDefs.js
|   |
|   |-- /resolvers
|   |   |-- userResolvers.js
|   |   |-- doctorResolvers.js
|   |   |-- appointmentResolvers.js
|   |
|   |-- index.js
|
|-- /models
|   |-- index.js
|   |-- user.js
|   |-- doctor.js
|   |-- appointment.js
|   |-- prescription.js
|
|-- server.js
|-- package.json
|-- .env

Directories:

    /graphql: Contains GraphQL schema files (typeDefs) and resolver files.
    /models: Contains Sequelize models for the database entities such as Users, Doctors, Appointments, and Prescriptions.
    server.js: Entry point for the application, where the Apollo server is initialized and Express middleware is applied.

Setup and Installation
Prerequisites

Ensure that you have the following installed:

    Node.js
    SQLite3 (or any other database you are using)

1. Clone the repository

Clone the repository to your local machine:

git clone https://github.com/your-repo/healthcare-management.git
cd healthcare-management

2. Install dependencies

Run the following command to install required Node.js packages:

npm install

3. Setup Environment Variables

Create a .env file in the root of the project and configure your environment variables (optional):

DATABASE_URL=sqlite://./database.sqlite  # If using SQLite
PORT=4000

4. Sync Database

The app uses Sequelize ORM for database management. The database will be automatically synced when the server starts.
5. Start the Server

Run the following command to start the server:

npm start

The server should now be running at http://localhost:4000/graphql.
GraphQL API

You can test the GraphQL API using any GraphQL client like Apollo Studio, Postman, or GraphiQL. Below are some sample queries and mutations you can use.
Sample Queries

Get All Doctors:

query {
  getDoctors {
    id
    name
    specialty
  }
}

Get a Doctor by ID:

query {
  getDoctorById(id: "1") {
    id
    name
    specialty
  }
}

Get All Users (Patients and Doctors):

query {
  getUsers {
    id
    name
    role
  }
}

Sample Mutations

Add a Doctor:

mutation {
  addDoctor(name: "Dr. John Doe", specialty: "Cardiology") {
    id
    name
    specialty
  }
}

Add an Appointment:

mutation {
  addAppointment(patientId: "1", doctorId: "2", date: "2025-03-11T10:00:00Z", status: "Scheduled") {
    id
    date
    status
    patientId
    doctorId
  }
}

Add Prescription:

mutation {
  addPrescription(doctorId: "1", patientId: "2", medicine: "Aspirin", dosage: "1 pill per day") {
    id
    medicine
    dosage
    doctorId
    patientId
  }
}

Database Models

    User Model: Represents a user, which can either be a patient or a doctor.
    Doctor Model: Represents a doctor with specialties and availability slots.
    Appointment Model: Represents an appointment between a patient and a doctor.
    Prescription Model: Represents a prescription issued by a doctor for a patient.
    Medical Records: A patient's historical medical information stored by doctors.

Troubleshooting

    Error: Cannot find module
        Ensure all modules are installed correctly by running npm install.
        Ensure the correct file paths in your imports.

    Error: ValidationError
        Check if all the required fields are provided in your GraphQL mutations.
        Ensure that the foreign keys are valid in your database (e.g., doctor and patient IDs must exist when creating appointments).