const express = require('express');
const { registerDocController, loginDocController, logoutDocController } = require('../controllers/authController');
const jwtMiddleware = require('../middlewares/jwtMiddleware');
const router = express.Router();


// Dr Authentication____________________________________________
router.post('/auth/register', registerDocController);
router.post('/auth/login', loginDocController);
// logout 
router.get('/auth/logout', jwtMiddleware, logoutDocController);



module.exports = router;


