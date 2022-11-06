const models = require('../models/index');
const bcrypt = require('bcrypt');
const jsonwebtoken = require("jsonwebtoken");
const usersControllers = {};
const {
    assertEmailIsValid,
    assertValidPasswordService,
} = require('../services/auth.service');

usersControllers.getusers_1 = async (req, res) => {
    try {
        let resp = await models.users.findAll()
        res.send(resp)

    } catch (err) {
        res.send(err)
    }

};

usersControllers.postusers_1 = async (req, res) => {
    const body = req.body;
    // validate password
    try {
        assertValidPasswordService(body.password);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Invalid password: " + error.message });
        return;
    }
    // validate email is valid
    try {
        assertEmailIsValid(body.email);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Email is invalid: " + error.message });
        return;
    }
    try {
        const myPlaintextPassword = body.password
        bcrypt.genSalt(function async(err, salt) {
            bcrypt.hash(myPlaintextPassword, salt, async function (err, hash) {
                const userCreated = await models.users.create(
                    {
                        name: body.name,
                        email: body.email,
                        dateBirth: body.dateBirth,
                        phone: body.phone,
                        password: hash,
                        id_rol: body.id_rol

                    }
                )
                res.send(userCreated)
            });
        });
    } catch (err) {
        res.send(err)
    }
};

usersControllers.loginUser = async (req, res) => {
    const { email, password } = req.body;
    const userFound = await models.users.findOne({ where: { email: email } });
    if (!userFound) {
        return res.status(404).json({ message: "La contraseña o el email son incorrectos" })
    }
    const hashedPassword = () => {
        const loginPassword = password;
        bcrypt.compare(loginPassword, userFound.password, function (err, result) {

            if (!result) {
                return res.send({ message: "La contraseña o el email son incorrectos" });
            } else {
                const secret = process.env.JWT_SECRET || '';
                const jwt = jsonwebtoken.sign({
                    id_user: userFound.id_user,
                    email: userFound.email,
                    created: Date.now(),
                    id_rol: userFound.id_rol
                }, secret);
                return res.send({
                    message: "Login realizado correctamente",
                    jwt: jwt,
                });
            }
        });
    }
    hashedPassword()


}



usersControllers.showUser = async (req, res) => {
    let id = req.params;
    const { email } = req.body
    try {
        const userFound = await models.users.findAll({ where: { email: email } })
        let mapUser = userFound.map(user => user.dataValues)
        let objectUser = mapUser.map(id => id.id_user)
        if (Number(id.id) === objectUser[0]) {
            let user = await models.users.findOne({
                where: { email: email }
            })
            res.send(user)
        } else {
            res.send({ message: 'Estás intentado realizar un búsqueda que no coincide al id de la ruta' })
        }

    } catch (err) {
        res.send(err)
    }
};

usersControllers.updatedUser = async (req, res) => {
    try {
        let id = req.params.id;
        let user = req.body;
        const userFound = await models.users.findAll({ where: { email: user.email } })
        let mapUser = userFound.map(user => user.dataValues)
        let objectUser = mapUser.map(id => id.id_user)
        if (Number(id) === objectUser[0]) {
            let resp = await models.users.update(
                {
                    name: user.name,
                    email: user.email,
                    dateBirth: user.dateBirth,
                    phone: user.phone
                },
                {
                    where: { id_user: id }
                }
            )
            res.send({
                resp: resp,
                message: 'Usuario actualizado correctamente'
            })
        } else {
            res.send({ message: 'Estás intentado realizar un modificación que no corresponde a tu perfil en la ruta' })
        }

    } catch (err) {
        res.send(err)
    }
};

usersControllers.deleteUsers = async (req, res) => {
    try {
        let id = req.body
        let resp = await models.users.destroy({
            where: { id_user: id.id_user }
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