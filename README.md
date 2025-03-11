# Healthcare Management System

A powerful healthcare management system built with Node.js, GraphQL, and Sequelize to manage appointments, users (patients & doctors), prescriptions, and more. The system allows patients to book appointments with doctors, doctors to prescribe medicines, and patients to access their medical history.

## Features

- **User Management**: Role-based authentication for Patients and Doctors.
- **Appointments**: Patients can book appointments with doctors.
- **Prescriptions**: Doctors can prescribe medicines to patients after consultations.
- **Medical History**: Patients can access their past medical records.
- **Doctor Management**: Doctors can manage their availability and specialties.

## Tech Stack

- **Node.js**: JavaScript runtime for building the backend.
- **GraphQL**: API layer to handle client queries and mutations.
- **Sequelize**: ORM for interacting with the database (SQLite used for development).
- **Express.js**: Web framework for creating the API.
- **Apollo Server**: For setting up the GraphQL server.

## Installation

To get started with the project, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/abhay321/healthcare-management.git
cd healthcare-management 
```

### 2. Install Dependencies

```bash
npm install
```
This will install all the necessary dependencies listed in package.json.

### 3. Configure Database

Before running the application, make sure to set up your database connection in the appropriate file (models/index.js for Sequelize).

```bash

```
### 4. Run the Application

Start the application with:

```bash
npm start
```

The application will be running on http://localhost:4000.

Usage
```bash
http://localhost:4000/graphql
```
Once the server is running, you can access the GraphQL Playground at:
```bash
http://localhost:4000/graphql
```

GraphQL Queries

Here are a few example queries you can use in GraphQL Playground:
Get All Doctors
```bash
query {
  getDoctors {
    id
    name
    specialty
  }
}
```

Get All Patients

```bash
query {
  getPatients {
    id
    name
    email
  }
}
```

Book an Appointment

```bash
mutation {
  bookAppointment(doctorId: 1, patientId: 1, date: "2025-03-12T10:00:00Z") {
    id
    date
    status
  }
}

```

Contributing

We welcome contributions! If you'd like to contribute, please follow these steps:

    Fork the repository.
    Create a new branch for your feature or bug fix.
    Commit your changes with clear messages.
    Push your branch to your fork.
    Open a pull request with a clear description of your changes.