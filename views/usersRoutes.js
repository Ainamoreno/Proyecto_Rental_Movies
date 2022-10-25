const express = require('express');
const router = express.Router();

const User = require('../models/users')

router.get('/getUsers', (req, res) => {
    User.findAll()
    .then(resp => {
        res.send(resp)
    })
});


module.exports = router