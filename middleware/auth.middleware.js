const jsonwebtoken = require("jsonwebtoken");

const authBearerMiddleware = async (req, res, next) => {
    const { authorization } = req.headers;   
    if(!authorization) {
        res.status(401).json({ message: "Necesitas realizar un login para acceder" });
    }
    const [strategy, jwt] = authorization.split(" ");

    try {
        if (strategy.toLowerCase() !== "bearer") {
            throw new Error("Estrategia no válida");
        }
        const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET);
        req.auth = payload
        next();
    } catch (error) {
        res.status(401).json({ message: "No estás autenticado" });
        return;
    }
};

const isValidRoleAdmin = (req, res, next) => {
    if (req.auth?.id_rol === 1) {
        next();
    } else {
        res.status(403).json({ message: "No estás autorizado" });
    }
}

module.exports = {authBearerMiddleware, isValidRoleAdmin};