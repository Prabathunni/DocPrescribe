const doctorModel = require('../model/doctorSchema');
const bCrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config;



// Register-----------------------
exports.registerDocController = async (req,res) => {
    console.log("Inside register controller");
    try {
        const { name, email, password, clinicName, phoneNumber, qualification } = req.body;

        const existingUser = await doctorModel.findOne({email});

        if(existingUser) return res.status(404).json("Registered Email");

        const encryptedPassword = await bCrypt.hash(password, 8)

        const newUser =new doctorModel({
            name,
            email,
            password: encryptedPassword,
            clinicName,
            phoneNumber,
            qualification
        })

        await newUser.save();

        res.status(201).json({message:"user registered successfully" , newUser})
        
    } catch (error) {
        res.status(500).json(error.message)
    }
}


// login---------------------------
exports.loginDocController = async (req,res) => {
    console.log("Inside login Controller");
    try {
        const { email, password } = req.body;

        const newUser = await doctorModel.findOne({email})
        if (!newUser) return res.status(404).json("No account Exists! Please Register");

        const user = await doctorModel.findOne({email})
        const isPasswordValid = await bCrypt.compare(password, user.password);
        if(!isPasswordValid) return res.status(404).json("Wrong Password");

        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, { expiresIn: '7d' })

        res.cookie('token', token, {
            httpOnly:true,
            secure:false,
            maxAge: 86400000 
        })

        res.status(200).json({message:"Login Successful", token, user});

        
    } catch (error) {
        res.status(500).json(error.message)
    }
}


// logout----------------------------
exports.logoutDocController = async (req,res) => {
    console.log("In Logout controller");
    try {
        res.clearCookie('token',{
            httpOnly: true,
            secure: false
        })

        res.status(201).json("Logged Out")
    } catch (error) {
        res.status(500).json(error.message)
    }
}