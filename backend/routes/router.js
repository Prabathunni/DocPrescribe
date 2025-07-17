const express = require('express');
const { registerDocController, loginDocController, logoutDocController } = require('../controllers/authController');
const jwtMiddleware = require('../middlewares/jwtMiddleware');
const { addPrescribtionController, getAllPrescriptions } = require('../controllers/PrescribtionController');
const verifyController = require('../controllers/verifyController');
const router = express.Router();


console.log("Registering route: POST /auth/register");
router.post('/auth/register', registerDocController);

console.log("Registering route: POST /auth/login");
router.post('/auth/login', loginDocController);

console.log("Registering route: GET /auth/logout");
router.get('/auth/logout', jwtMiddleware, logoutDocController);

console.log("Registering route: GET /auth/verify");
router.get('/auth/verify', verifyController);

console.log("Registering route: POST /prescription/add");
router.post('/prescription/add', jwtMiddleware, addPrescribtionController);

console.log("Registering route: GET /prescription");
router.get('/prescription', jwtMiddleware, getAllPrescriptions);




module.exports = router;


