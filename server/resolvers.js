const { getResponseKeyFromInfo } = require("@graphql-tools/utils");

const doctors = [
    { id: 1, name: "Benedict Cumberbatch", specialization: "Therapist", email: "Benedict@gmail.com", phone: "0959423146" },
    { id: 2, name: "Harry Styles", specialization: "Therapist", email: "Harry@gmail.com", phone: "0959423146" },
    { id: 3, name: "John Dorian", specialization: "Therapist", email: "John@gmail.com", phone: "0959423146" },
];



const assistants = [
    { id: 1, name: "Alex Sample", email: "Alex@gmail.com", phone: "0959423146" },
    { id: 2, name: "Mango Sample", email: "Mango@gmail.com", phone: "0959423146" },
    { id: 3, name: "Josh Sample", email: "Josh@gmail.com", phone: "0959423146" },
];
const receptionists = [
    { id: 1, name: "Alex Sample", email: "Alex@gmail.com", phone: "0959423146" },
    { id: 2, name: "Mango Sample", email: "Mango@gmail.com", phone: "0959423146" },
    { id: 3, name: "Josh Sample", email: "Josh@gmail.com", phone: "0959423146" },
];
let rooms = [
    { id: 1, name: "1a", timeStatus: "", status: "", assignedDoctorId: 1 },
    { id: 2, name: "1b", timeStatus: "", status: "", assignedDoctorId: 1 },
    { id: 3, name: "1c", timeStatus: "", status: "", assignedDoctorId: 1 },
    { id: 4, name: "1d", timeStatus: "", status: "", assignedDoctorId: 1 },
    { id: 5, name: "2a", timeStatus: "", status: "", assignedDoctorId: 2 },
    { id: 6, name: "2b", timeStatus: "", status: "", assignedDoctorId: 2 },
    { id: 7, name: "2c", timeStatus: "", status: "", assignedDoctorId: 2 },
    { id: 8, name: "2d", timeStatus: "", status: "", assignedDoctorId: 2 },
    { id: 9, name: "3a", timeStatus: "", status: "", assignedDoctorId: 3 },
    { id: 10, name: "3b", timeStatus: "", status: "", assignedDoctorId: 3 },
    { id: 11, name: "3c", timeStatus: "", status: "", assignedDoctorId: 3 },
    { id: 12, name: "3d", timeStatus: "", status: "", assignedDoctorId: 3 },
];

const colors = ["rgba(238, 88, 151, 0.19)", "rgba(134, 232, 238, 0.19)", "rgba(250, 112, 12, 0.19)", "rgba(228, 133, 243, 0.19)", "rgba(196, 230, 233, 0.19)", "rgba(120, 242, 117, 0.19)"]

const alerts = Array.apply(null, { length: 35 }).map((_,index) => ({ id: Math.floor(Math.random() * 5000), name: `Doctor in ${index+1}`, color: colors[Math.floor(Math.random() * 6)], textColor: "" }))



const createDoctor = (doctor) => {
    const id = Math.floor(Math.random()*5000);
    return {
        id, ...doctor
    };
};
const createAssistant = (assistant) => {
    const id = Math.floor(Math.random()*5000);
    return {
        id, ...assistant
    };
};
const createReceptionist = (receptionist) => {
    const id = Math.floor(Math.random()*5000);
    return {
        id, ...receptionist
    };
};

const resolvers = {
    Query: {
        getDoctorRooms: ({ id }) => {
            return rooms.filter(room => room.assignedDoctorId == id);
        },
        getAllDoctors: () => {
            return doctors
        },
        getDoctor: ({ id }) => {
            return doctors.find(doctor => doctor.id == id)
        },
        getAllReceptionists: () => {
            return receptionists
        },
        getReceptionist: ({ id }) => {
            return receptionists.find(receptionist => receptionist.id == id)
        },
        getAllAssistants: () => {
            return assistants
        },
        getAssistant: ({ id }) => {
            return assistants.find(assistant => assistant.id == id)
        },
        getAllRooms: () => {
            return rooms;
        },
        getAllAlerts: () => {
            return alerts;
        },
        getAllColorsAlerts: () => {
            return colors.map((color, index) => ({ id: index, value: color }))
        },

    },

    Mutation: {
        createDoctor: (_, { doctor }) => {
            const doc = createDoctor(doctor)
            doctors.push(doc)
            return doc
        },
        deleteDoctor: (_, { doctorId }) => {
            const doc = doctors.findIndex(doctor => +doctor.id === +doctorId);
            doctors.splice(doc, 1)
            return doctorId
        },
        updateDoctor: (_, { doctorId, doctorInput }) => {
            const newDoc = doctors.findIndex(doctor => +doctor.id === +doctorId);
            doctors.splice(newDoc, 1, { id: doctorId, ...doctorInput });
            return { id: doctorId, ...doctorInput };
        },
        createAssistant: (_, { assistant }) => {
            const assist = createAssistant(assistant)
            assistants.push(assist)
            return assist
        },
        deleteAssistant: ({ assistantId }) => {
            const assist = assistants.findIndex(assistant => +assistant.id === +assistantId);
            assistants.splice(assist, 1);
            return assistantId
        },
        updateAssistant: (_, { assistantId, assistantInput }) => {
            const newAssist = assistants.findIndex(assist => +assist.id === +assistantId);
            assistants.splice(newAssist, 1, { id: assistantId, ...assistantInput });
            return { id: assistantId, ...assistantInput };
        },
        createReceptionist: (_, { receptionist }) => {
            const recept = createReceptionist(receptionist)
            receptionists.push(recept)
            return recept
        },
        deleteReceptionist: ({ receptionistId }) => {
            const recept = receptionists.findIndex(receptionist => +receptionist.id === +receptionistId);
            receptionists.splice(recept, 1);
            return recept
        },
        updateReceptionist: (_, { receptionistId, receptionistInput }) => {
            const newRecept = receptionists.findIndex(recept => +recept.id === +receptionistId);
            receptionists.splice(newRecept, 1, { id: receptionistId, ...receptionistInput });
            return { id: receptionistId, ...receptionistInput };
        },
        assignRoomToDoctor: (_, { room }) => {
            rooms = rooms.map(el => +el.id === +room.id ? { ...el, ...room } : el)
            return rooms.find(el => el.id === room.id)
        },
        deleteRoom: (_, { id }) => {
            rooms = rooms.filter(room => +room.id !== +id);
            return id
        },
        createAlert: (_, { alert }) => {
            const item = { ...alert };
            alerts.forEach(alert => {
                if (alert.name[0] === item.name && alert.color === item.color) {
                    item.textColor = colors[Math.floor(Math.random() * 6)]
                } else {
                    item.textColor = item.color;
                }
            })
            item.id = Math.floor(Math.random() * 5000)
            alerts.push(item)
            return item;

        }
    },
    Doctor: {
        rooms: ({ id, ...props }, args, context) => {
            return rooms.filter(room => +room.assignedDoctorId === +id);
        },
    },
    Room: {
        assignedDoctor: (data) => {
            return doctors.find(el => el.id === data.assignedDoctorId)
        }
    }
};

module.exports = { resolvers }