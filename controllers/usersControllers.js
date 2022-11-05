const models = require('../models/index');
const bcrypt = require('bcrypt');
const jsonwebtoken = require("jsonwebtoken");
const usersControllers = {};
const {
    assertEmailIsValid,
    assertValidPasswordService
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
        res.status(404).json({ message: "La contraseña o el email son incorrectos" })
        return;
    }
    const hashedPassword = () => {
        const loginPassword = password;
        bcrypt.compare(loginPassword, userFound.password, function (err, result) {
            if (!result) {
                res.status(401).json({ message: "La contraseña o el email son incorrectos" });
                return;
            }
        });
    }
    hashedPassword()
    const secret = "secretAAAHHhhaa56789";

    const jwt = jsonwebtoken.sign({
        id_user: userFound.id_user,
        email: userFound.email,
        id_rol: userFound.id_rol
    }, secret);
    res.send({
        message: "Login realizado correctamente",
        jwt: jwt,
    });
}


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

usersControllers.updatedUser = async (req, res) => {
    try {
        let id = req.params.id;
        let user = req.body;
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

