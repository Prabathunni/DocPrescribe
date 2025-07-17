const jwt = require('jsonwebtoken')
require('dotenv').config();

const jwtMiddleware = (req, res, next) => {
    console.log("Inside jwt middleware");
    try {
        const token = req.cookies.token;
        if (!token) return res.status(401).json({ message: "Unauthorized: No token provided in cookie" });
        
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        req.userId = decodedToken.userId;
        next()

    } catch (error) {
        console.error("JWT verification error:", error);
        return res.status(403).json({ message: "Invalid or expired token", error: error.message });
    }

}

module.exports = jwtMiddleware;