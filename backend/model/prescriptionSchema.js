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
            dosage: { type: String ,default:'N/A'},
            frequency: { type: String, default:'N/A'},
            route: { type: String ,default:'N/A'}
        }
    ],
    doctorID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'doctors',
            required: true
        }
}, { timestamps: true })


const prescriptionsModel = mongoose.model('/prescriptions', prescriptionsSchema)

module.exports = prescriptionsModel;