const prescriptionsModel = require('../model/prescriptionSchema');

exports.addPrescribtionController = async (req,res) => {
    console.log("inside prescribtion Controller");
    try {
        
        
    } catch (error) {
        res.status(500).json(error.message)
    }
}