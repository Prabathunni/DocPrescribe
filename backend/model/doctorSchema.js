const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    clinicName:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    prescriptions:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'prescriptions'
        }
    ]
},{timestamps: true})


const doctorModel = mongoose.model('doctors', doctorSchema)

module.exports = doctorModel;