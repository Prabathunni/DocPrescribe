const express = require('express');
const { registerDocController, loginDocController, logoutDocController } = require('../controllers/authController');
const jwtMiddleware = require('../middlewares/jwtMiddleware');
const { addPrescribtionController, getAllPrescriptions } = require('../controllers/PrescribtionController');
const verifyController = require('../controllers/verifyController');
const router = express.Router();


// Dr Authentication____________________________________________
router.post('/api/auth/register', registerDocController);
router.post('/api/auth/login', loginDocController);
// logout 
router.get('/api/auth/logout', jwtMiddleware, logoutDocController);
// verify route
router.get('/api/auth/verify', verifyController)


// Prescriptions_________________________________________________
router.post('/api/prescription/add', jwtMiddleware, addPrescribtionController)
router.get('/api/prescription', jwtMiddleware, getAllPrescriptions)




module.exports = router;


