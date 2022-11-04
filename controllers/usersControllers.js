const models = require('../models/index');
const bcrypt = require('bcrypt');

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
        const saltRounds = 10;
        const myPlaintextPassword = body.password;
        console.log(myPlaintextPassword)
        bcrypt.genSalt(saltRounds, function async(err, salt) {
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

function assertValidPasswordService(pass) {
    if (pass.length < 8) {
        throw new Error("Password must be at least 8 characters long");
    }
    // validate it has one lower case letter
    if (!pass.match(/[a-z]/)) {
        throw new Error("Password must have at least one lower case letter");
    }
    // validate it has one upper case letter
    if (!pass.match(/[A-Z]/)) {
        throw new Error("Password must have at least one upper case letter");
    }
    // validate it has one number
    if (!pass.match(/[0-9]/)) {
        throw new Error("Password must have at least one number");
    }
};

function assertEmailIsValid(email) {
    // must validate a valid email
    const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return emailRegex.test(email);
    const isValid = email.match(emailRegex);
    if (!isValid) {
        throw new Error("Email is invalid");
    }
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
