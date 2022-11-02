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
    let user = req.body;
    try {

        let resp = await models.users.create({
            name: user.name,
            dateBirth: user.dateBirth,
            phone: user.phone,
            email: user.email,

        })
        res.send({
            resp: resp,
            message: `El usuario ha sido creado correctamente.`
        })
    } catch (err) {
        res.send(err)
    }
};

usersControllers.getusers_2 = async (req, res) => {
    try {
        let resp = await models.users.findAll()
        let users = resp.map(users => users.id_user)
        let ultimoId = users[users.length - 1]
        let user = await models.users.findOne({
            where: { id_user: ultimoId }
        })
        res.send(user)
    } catch (err) {
        res.send(err)
    }
};

usersControllers.putusers_1 = async (req, res) => {
    try {
        let id = req.params.id;
        let user = req.body;
        let resp = await models.users.update(
            {
                name: user.name,
                email: user.email,
                dateBirth: user.dateBirth,
                phone: user.phone,
            },
            {
                where: { id_user: id }
            }
        )
        res.send({
            resp: resp,
            message: 'Usuario actualizado correctamente'
        })
    } catch (err) {
        res.send(err)
    }
};

usersControllers.deleteusers_1 = async (req, res) => {
    try {
        let id = req.params.id
        let resp = await models.users.destroy({
            where: { id_user: id }
        })
        if (resp == 1) {
            res.send("Se ha eliminado correctamente")
        } else {
            res.send("No se ha eliminado correctamente")
        }
    } catch (err) {
        res.send(err)
    }
}
module.exports = usersControllers

