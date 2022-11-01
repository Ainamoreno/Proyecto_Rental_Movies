const express = require('express');
const router = express.Router();
const models = require('../models/index')
const usersControllers = require('../controllers/usersControllers');


router.get('/showUser', usersControllers.getusers_1 );
router.post('/createUser/:user', usersControllers.postuser_1)


module.exports = router