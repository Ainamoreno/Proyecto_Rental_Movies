const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers');
const { authBearerMiddleware, isValidRoleAdmin } = require('../middleware/auth.middleware')

router.get('/showUser', usersControllers.getusers_1);
router.post('/createUser', usersControllers.postusers_1);
router.post('/loginUser', usersControllers.loginUser);
router.get('/showLastUser', authBearerMiddleware, usersControllers.getusers_2);
router.put('/modifUser/:id', authBearerMiddleware, usersControllers.updatedUser);
router.delete('/deleteUser', authBearerMiddleware, isValidRoleAdmin, usersControllers.deleteUsers);


module.exports = router