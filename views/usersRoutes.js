const express = require('express');
const router = express.Router();
const models = require('../models/index')
// const User = require('../models/users')

router.get('/getUsers', (req, res) => {
    models.User.findAll()
    .then(resp => {
        res.send(resp)
    })
});


module.exports = router