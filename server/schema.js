const { makeExecutableSchema } = require('graphql-tools');
const { resolvers } = require('./resolvers');

const schema = makeExecutableSchema({
    typeDefs: `    
    type Doctor {
        id: ID
        name: String!
        specialization: String!
        email: String!
        phone: String!
        rooms: [Room]
    }
    type Room {
        id: ID
        name: String!
        timeStatus: String!
        status: String!
        assignedDoctorId: Int!
        assignedDoctor:Doctor
    }
    type Assistant {
        id: ID
        name: String!
        email: String!
        phone: String!
    }
    type Receptionist {
        id: ID
        name: String!
        email: String!
        phone: String!
    }
    type Alert {
        id: ID
        name: String
        color: String
        role: String
    }

    input DoctorInput {
        id: ID
        name: String!
        specialization: String!
        email: String!
        phone: String!
    }
    input RoomInput {
        id: ID
        name: String!
        timeStatus: String!
        status: String!
        assignedDoctorId: Int!
    }
    input AssistantInput {
        id: ID
        name: String!
        email: String!
        phone: String!
    }
    input ReceptionistInput {
        id: ID
        name: String!
        email: String!
        phone: String!
    }
    input AlertInput {
        id: ID
        name: String
        color: String
        role: String
    }

    type Query {
        getAllDoctors: [Doctor]
        getDoctor(id: ID!): Doctor
        getAllAssistants: [Assistant]
        getAssistant(id: ID!): Assistant
        getAllReceptionists: [Receptionist]
        getReceptionist(id: ID!): Receptionist
        getAllAlerts: [Alert]
        getDoctorRooms(id: ID!): [Room]
        getAllRooms:[Room]
    }
    type Mutation {
        createDoctor(doctor: DoctorInput): Doctor
        deleteDoctor(doctorId: ID!): ID
        updateDoctor(doctorId: ID!, doctorInput: DoctorInput!): Doctor        
        createAssistant(assistant: AssistantInput!): Assistant
        deleteAssistant(assistantId: ID!): ID
        updateAssistant(assistantId: ID!, assistantInput: AssistantInput!): Assistant
        createReceptionist(receptionist: ReceptionistInput!): Receptionist
        deleteReceptionist(receptionistId: ID!): Receptionist
        updateReceptionist(receptionistId: ID!, receptionistInput: ReceptionistInput!): Receptionist
        createAlert(alert: AlertInput!): Alert
        deleteAlert(alertId: ID!): ID
        updateAlert(alertId: ID!, alertInput: AlertInput!): Alert
        assignRoom(room:RoomInput!):Room
    }
`,
    resolvers
})

module.exports = schema