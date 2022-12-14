const models = require("../models/index");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const usersControllers = {};
const {
  assertEmailIsValid,
  assertValidPasswordService,
} = require("../services/auth.service");

usersControllers.getusers_1 = async (req, res) => {
  try {
    let resp = await models.users.findAll();
    res.send(resp);
  } catch (err) {
    res.send(err);
  }
};
usersControllers.showAllUsers = async (req, res) => {
  const allUsers = await models.users.findAll();
  res.send(allUsers)
};
usersControllers.postusers_1 = async (req, res) => {
  const { email } = req.body;
  const body = req.body;
  // Makes sure that the email is unique
  const existingMail = await models.users.findOne({ where: { email: email } });
  if (existingMail) {
    return res.send("Este e-mail ya ha sido registrado");
  } else {
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
      const myPlaintextPassword = body.password;
      bcrypt.genSalt(function async(err, salt) {
        bcrypt.hash(myPlaintextPassword, salt, async function (err, hash) {
          const userCreated = await models.users.create({
            name: body.name,
            email: body.email,
            phone: body.phone,
            password: hash,
            name_rol: body.name_rol,
          });
          // res.send(`Usuario ${body.email} ya creado`)
          res.send(userCreated);
        });
      });
    } catch (err) {
      res.send(err);
    }
  }
};

usersControllers.loginUser = async (req, res) => {
  const { email, password } = req.body;

  // let mapUser = allUsers.map((user) => user.dataValues);
  // let objectUser = mapUser.map((email) => email.email);
  // console.log(objectUser);
  const userFound = await models.users.findOne({ where: { email: email } });

  if (!userFound) {
    return res
      .status(404)
      .json({ message: "La contrase??a o el email son incorrectos" });
  }
  const hashedPassword = () => {
    const loginPassword = password;
    bcrypt.compare(loginPassword, userFound.password, function (err, result) {
      if (!result) {
        return res.send({
          message: "La contrase??a o el email son incorrectos",
        });
      } else {
        const secret = process.env.JWT_SECRET || "";
        const jwt = jsonwebtoken.sign(
          {
            id_user: userFound.id_user,
            name: userFound.name,
            email: userFound.email,
            created: Date.now(),
            name_rol: userFound.name_rol,
          },
          secret
        );
        return res.send({
          message: "Login realizado correctamente",
          jwt: jwt,
        });
      }
    });
  };
  hashedPassword();
};

usersControllers.showUser = async (req, res) => {
  let id = req.params;
  const { email } = req.body;
  try {
    const userFound = await models.users.findAll({ where: { email: email } });
    let mapUser = userFound.map((user) => user.dataValues);
    let objectUser = mapUser.map((id) => id.id_user);
    if (Number(id.id) === objectUser[0]) {
      let user = await models.users.findOne({
        where: { email: email },
      });
      res.send(user);
    } else {
      res.send({
        message:
          "Est??s intentado realizar un b??squeda que no coincide al id de la ruta",
      });
    }
  } catch (err) {
    res.send(err);
  }
};

usersControllers.updatedUser = async (req, res) => {
  try {
    let user = req.body;

    const userFound = await models.users.findAll({
      where: { email: user.email },
    });
    console.log("aqui", userFound);
    let mapUser = userFound.map((user) => user.dataValues);
    let objectUser = mapUser.map((id) => id.id_user);
    let rolUser = mapUser.map((rol) => rol.name_rol);
    console.log(objectUser);
    let resp = await models.users.update(
      {
        name: user.name,
        phone: user.phone,
      },

      {
        where: { email: user.email },
      }
    );
    console.log("name", user.name);
    const secret = process.env.JWT_SECRET || "";
    const jwt = jsonwebtoken.sign(
      {
        id_user: objectUser[0],
        name: user.name,
        email: user.email,
        created: Date.now(),
        name_rol: rolUser[0],
      },
      secret
    );
    res.send({
      resp: resp,
      message: "Usuario actualizado correctamente",
      jwt: jwt,
    });
  } catch (err) {
    res.send(err);
  }
};

usersControllers.deleteUsers = async (req, res) => {
  try {
    let id = req.body;
    let resp = await models.users.destroy({
      where: { id_user: id.id_user },
    });
    if (resp == 1) {
      res.send("Se ha eliminado correctamente");
    } else {
      res.send("No se ha eliminado correctamente");
    }
  } catch (err) {
    res.send(err);
  }
};
module.exports = usersControllers;
