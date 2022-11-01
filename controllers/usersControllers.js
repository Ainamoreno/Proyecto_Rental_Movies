const models = require('../models/index');

const usersControllers = {};
usersControllers.getusers_1 = async (req, res) => {
    try {
        let resp = await models.users.findAll()
        res.send(resp)

    } catch (err) {
        res.send(err)
    }

};

usersControllers.postusers_1 = async (req, res) => {
    try {
        let user = req.params.body
        
    }catch (err) {
        res.send(err)
    }
}
module.exports = usersControllers

