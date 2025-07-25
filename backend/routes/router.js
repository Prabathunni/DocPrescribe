const express = require('express');
const { registerDocController, loginDocController, logoutDocController } = require('../controllers/authController');
const jwtMiddleware = require('../middlewares/jwtMiddleware');
const { addPrescribtionController, getAllPrescriptions } = require('../controllers/PrescribtionController');
const verifyController = require('../controllers/verifyController');
const router = express.Router();


//  Authentication____________________________________________
// register
router.post('/auth/register', registerDocController);
// login
router.post('/auth/login', loginDocController);
// logout 
router.get('/auth/logout', jwtMiddleware, logoutDocController);
// verify route
router.get('/auth/verify', verifyController)


// Prescriptions_________________________________________________
router.post('/prescription/add', jwtMiddleware, addPrescribtionController)
router.get('/prescription', jwtMiddleware, getAllPrescriptions)


module.exports = router;


