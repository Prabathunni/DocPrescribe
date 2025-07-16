const mongoose = require('mongoose');

const prescriptionsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    diagnosis: {
        type: String,
        required: true
    },
    medicines: [
        {
            name: { type: String, required: true },
            dosage: { type: String, required: true },
            frequency: { type: String, required: true },
            route: { type: String, required: true }
        }
    ],
    doctorID: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'doctors',
            required: true
        }
    ]
}, { timestamps: true })


const prescriptionsModel = mongoose.model('/prescriptions', prescriptionsSchema)

module.exports = prescriptionsModel;