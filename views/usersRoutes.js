const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers');
const { authBearerMiddleware, isValidRoleAdmin, validUser } = require('../middleware/auth.middleware')

router.get('/showUser', usersControllers.getusers_1);
router.get('/showAllUsers',authBearerMiddleware, usersControllers.showAllUsers);
router.post('/createUser', usersControllers.postusers_1);
router.post('/loginUser', usersControllers.loginUser);
router.get('/showYourUser/:id', authBearerMiddleware, validUser, usersControllers.showUser);
router.put('/modifUser/', authBearerMiddleware, usersControllers.updatedUser);
router.delete('/deleteUser', authBearerMiddleware, validUser, isValidRoleAdmin, usersControllers.deleteUsers);


module.exports = router