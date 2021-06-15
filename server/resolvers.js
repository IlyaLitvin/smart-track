
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

let rooms = Array.apply(null, { length: 20 }).map((_, index) => ({ id: index, name: index + "b", timeStatus: "", statusId: -1, assignedDoctorId: Math.floor(Math.random() * 4) }))

let colors = ["rgba(238, 88, 151, 0.19)", "rgba(134, 232, 238, 0.19)", "rgba(250, 112, 12, 0.19)", "rgba(228, 133, 243, 0.19)", "rgba(196, 230, 233, 0.19)", "rgba(120, 242, 117, 0.19)"]

let alerts = Array.apply(null, { length: 25 }).map((_,index) => ({ id: index+1, name: `Doctor in ${index+1}`, color: colors[Math.floor(Math.random() * 6)], textColor: "" }))




const createDoctor = (doctor) => {
    const id = Math.floor(Math.random() * 5000);
    return {
        id, ...doctor
    };
};
const createAssistant = (assistant) => {
    const id = Math.floor(Math.random() * 5000);
    return {
        id, ...assistant
    };
};
const createReceptionist = (receptionist) => {
    const id = Math.floor(Math.random() * 5000);
    return {
        id, ...receptionist
    };
};

const resolvers = {
    Query: {
        /*Doctors*/
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
        /*Receptionists*/
        getReceptionist: ({ id }) => {
            return receptionists.find(receptionist => receptionist.id == id)
        },
        /*Assitants*/
        getAllAssistants: () => {
            return assistants
        },
        getAssistant: ({ id }) => {
            return assistants.find(assistant => assistant.id == id)
        },
        /*Rooms*/
        getAllRooms: () => {
            return rooms;
        },
        /*Alerts*/
        getAllAlerts: () => {
            return alerts;
        },
        getAllColorsAlerts: () => {
            return colors.map((color, index) => ({ id: index, value: color }))
        },
    },

    Mutation: {
        /*Doctors*/
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
        /*Assistants*/
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
        /*Receptionists*/
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
        /*Rooms*/
        addRoom: (_, { room }) => {
            room.id = Date.now();
            room.assignedDoctorId = -1;
            room.statusId = -1;
            room.timeStatus = "";
            rooms.push(room);
            return room;
        },
        updateRoom: (_, {roomId, roomInput }) => {
            rooms = rooms.map(room => +room.id === +roomId ? { ...room, ...roomInput } : room);
            return rooms.find(room => +room.id === +roomId);
        },
        assignRoomToDoctor: (_, { room }) => {
            rooms = rooms.map(el => +el.id === +room.id ? { ...el, ...room } : el)
            return rooms.find(el => el.id === room.id)
        },
        deleteRoom: (_, { id }) => {
            rooms = rooms.filter(room => +room.id !== +id);
            return id
        },
        /*Alerts*/
        createAlert: (_, { alert }) => {
            const item = { ...alert };
            alerts.forEach(alert => {
                if (alert.name[0] === item.name && alert.color === item.color) {
                    item.textColor = colors[Math.floor(Math.random() * 6)]
                } else {
                    item.textColor = item.color;
                }
            })
            item.id = Date.now()
            alerts.push(item)
            return item;

        },
        updateAlert: (_, { alertId, alert }) => {
            alerts = alerts.map((a => +a.id === +alertId ? { ...a, ...alert } : a))
            return alert
        }
    },
    Doctor: {
        rooms: ({ id }) => {
            return rooms.filter(room => +room.assignedDoctorId === +id);
        },
    },
    Room: {
        assignedDoctor: (data) => {
            return doctors.find(el => el.id === data.assignedDoctorId)
        },
        status: (data) => {
            return alerts.find(alert => +alert.id === +data.statusId)
        },
    },

};

module.exports = { resolvers }