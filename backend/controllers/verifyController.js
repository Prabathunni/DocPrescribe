const jwt = require('jsonwebtoken');
require('dotenv').config();


const verifyController = async (req, res) => {
    console.log("Inside verify Controller");
    try {
        const token = req.cookies.token;
        if (!token) return res.status(404).json("Token Expired or Unauthenticated user");

        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        return res.status(200).json({valid: "token valid", decoded})

    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = verifyController;