const models = require("../models/index");
const { Op } = require("sequelize");
const showsController = {};

showsController.getshows_1 = async (req, res) => {
  try {
    let resp = await models.articles.findAll({
      where: { type: "Serie" },
      order: [["score", "DESC"]],
    });
    res.send(resp);
  } catch (err) {
    res.send(err);
  }
};

showsController.getshows_2 = async (req, res) => {
  try {
    let id = req.params.id;
    let resp = await models.shows.findAll({
      where: { id_serie: id },
      include: {
        model: models.articles,
        attributes: ["name", "description"],
      },
    });
    res.send(resp);
  } catch (err) {
    res.send(err);
  }
};

showsController.getshows_3 = async (req, res) => {
  try {
    let name = req.params.name;
    let resp = await models.articles.findAll({
      where: {
        // name: name,
        type: "Serie",
        name: { [Op.like]: `%${name}%` },
      },
    });
    res.send(resp);
  } catch (err) {
    res.send(err);
  }
};
const sequelize = require("../db/db");
const { Sequelize } = require("sequelize");
let date = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${
  new Date().getDate() + 7
}`;


showsController.getshows_4 = async (req, res) => {
  let resp = await sequelize.query(
    "SELECT * FROM railway.shows where next_episode BETWEEN (CURDATE()) and (CURDATE() + INTERVAL 7 DAY)"
  );
  res.send(resp);
};

showsController.getshows_5 = async (req, res) => {
  try {
    let resp = await models.shows.findAll({
      where: { permit: true },
      include: {
        model: models.articles,
        attributes: ["name", "description"],
      },
    });
    res.send(resp);
  } catch (err) {
    res.send(err);
  }
};

module.exports = showsController;
