const {doctors, alerts, assistants, receptionists, rooms} = require('../database/mockDatabase');

const createDoctor = (doctor) => {
    const id = doctors.length + 1;
    return {
        id, ...doctor
    };
};
const createAssistant = (assistant) => {
    const id = assistant.length + 1;
    return {
        id, ...assistant
    };
};
const createReceptionist = (receptionist) => {
    const id = receptionist.length + 1;
    return {
        id, ...receptionist
    };
};

const resolvers = {
    Query: {
        getDoctorRooms: ({id}) => {
            return rooms.filter(room => room.assignedDoctorId == id);
        },
        getAllDoctors: () => {
            return doctors
        },
        getDoctor: ({id}) => {
            return doctors.find(doctor => doctor.id == id)
        },
        getAllReceptionists: () => {
            return receptionists
        },
        getReceptionist: ({id}) => {
            return receptionists.find(receptionist => receptionist.id == id)
        },
        getAllAssistants: () => {
            return assistants
        },
        getAssistant: ({id}) => {
            return assistants.find(assistant => assistant.id == id)
        },
    },

    Mutation: {
        createDoctor: ({doctor}) => {
            const doc = createDoctor(doctor)
            doctors.push(doc)
            return doc
        },
        deleteDoctor: ({id}) => {
            return doctors.find(doctor => doctor.id !== id)
        },

        createAssistant: ({assistant}) => {
            const assist = createAssistant(assistant)
            assistants.push(assist)
            return assist
        },
        deleteAssistant: ({id}) => {
            return assistants.find(assistant => assistant.id !== id)
        },

        createDoctor: ({receptionist}) => {
            const recept = createReceptionist(receptionist)
            receptionists.push(recept)
            return recept
        },
        deleteReceptionist: ({id}) => {
            return receptionists.find(receptionist => receptionist.id !== id)
        },
    },
    Doctor: {
        rooms: ({id}, args, context) => {
            return rooms.filter(room => room.assignedDoctorId === +id);
        },
    },
}

module.exports = {resolvers}
