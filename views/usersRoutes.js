const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers');


router.get('/showUser', usersControllers.getusers_1 );
router.post('/createUser', usersControllers.postusers_1);
router.post('/loginUser', usersControllers.loginUser);
router.get('/showLastUser', usersControllers.getusers_2);
router.put('/modifUser/:id', usersControllers.putusers_1);
router.delete('/deleteUser/:id', usersControllers.deleteusers_1);


module.exports = router