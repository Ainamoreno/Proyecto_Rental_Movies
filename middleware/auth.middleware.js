const jsonwebtoken = require("jsonwebtoken");
const models = require('../models/index');

const authBearerMiddleware = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        res.status(401).json({ message: "Necesitas realizar un login para acceder" });
    }
    const [strategy, jwt] = authorization.split(" ");
    console.log(strategy, jwt)
    try {
        if (strategy.toLowerCase() !== "bearer") {
            throw new Error("Estrategia no válida");
        }
        const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET);
        console.log(payload)
        // const created = payload.created;
        // const timeElapsed = Date.now() - created;
        // const MAX_TIME = 36000
        // const isValid = timeElapsed && created && MAX_TIME &&
        //     (timeElapsed < MAX_TIME);

        // if (!isValid) {
        //     throw new Error("El token ha expirado");
        // }
        req.auth = payload

        next();
    } catch (error) {
        res.status(401).json({ message: "No estás autenticado" });
        return;
    }
};

const validUser = async (req, res, next) => {
    const { authorization } = req.headers;
    const [strategy, jwt] = authorization.split(" ");
    const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET);
    console.log(payload)
    let body = req.body;
    const userFound = await models.users.findAll({ where: { email: body.email } })
    let mapUser = userFound.map(user => user.dataValues)
    let objectUser = mapUser.map(id => id.id_user)
    console.log(payload.id_user)
    console.log(body)
    console.log(objectUser[0])
    if (payload.id_user === objectUser[0] ) {
       
        next()
    }else {
        res.send({message: "El id del token no coincide con el tuyo"})
    }
};

const isValidRoleAdmin = (req, res, next) => {
    if (req.auth?.name_rol === 'Administrador') {
        next();
    } else {
        res.status(403).json({ message: "No estás autorizado" });
    }
}

module.exports = { authBearerMiddleware, isValidRoleAdmin, validUser };