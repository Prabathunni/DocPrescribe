const prescriptionsModel = require('../model/prescriptionSchema');

exports.addPrescribtionController = async (req,res) => {
    console.log("inside prescribtion Controller");
    try {
        const { name, age, gender, diagnosis, medicines } = req.body;
        const doctorID = req.userId;

        const newPrescribeModel =new prescriptionsModel({
           name,
           age,
           gender,
           diagnosis,
           medicines,
           doctorID

        })

        await newPrescribeModel.save()
        res.status(200).json("Prescription Saved Successfully")
    } catch (error) {
        res.status(500).json(error.message)
    }
}


exports.getAllPrescriptions = async (req,res) => {
    console.log("Inside get all prescriptions controller");
    try {
        const doctorID = req.userId;

        const prescriptions = await prescriptionsModel.find({
            doctorID
        })

        res.status(200).json(prescriptions)
        
    } catch (error) {
        res.status(500).json(error.message)
    }
    
}