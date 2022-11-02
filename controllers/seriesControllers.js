const models = require('../models/index');

const seriesController = {};


seriesController.getseries_1 = async (req, res) => {
    try {
        let resp = await models.series.findAll({
            order: [
                ["score", 'DESC']
            ]
        })
        res.send(resp);
    } catch (err) {
        res.send(err)
    }

};

seriesController.getseries_2 = async (req, res) => {
    try {
        let id = req.params.id
        let resp = await models.series.findAll(
            {
                where: { id_serie: id }
            }
        )
        res.send(resp)
    } catch (err) {
        res.send(err)
    }

};

seriesController.getseries_3 = async (req, res) => {
    try {
        let name = req.params.name;
        let resp = await models.series.findAll(
            {
                where: { nameSerie: name }
            }
        )
        res.send(resp);
    } catch (err) {
        res.send(err)
    }

};
const sequelize = require('../db/db')
const { Sequelize } = require('sequelize')
let date = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate() + 7}`
const { Op } = require("sequelize");

seriesController.getByDate = async (req, res) => {
    let resp = await sequelize.query("SELECT * FROM railway.series where next_episode BETWEEN (CURDATE()) and (CURDATE() + INTERVAL 7 DAY)");
    res.send(resp);
};
// seriesController.getseries_4 = async (req, res) => {
//     let resp = await models.series.findAll(
//         {
//             where: {
//                 [Sequelize.Op.and]: [
//                     Sequelize.literal(`next_episode > NOW() - INTERVAL '5h'`),
//                 ],
//             },
//         }
//     )
//     res.send(resp);
// };

seriesController.getseries_5 = async (req, res) => {
    try {
        let resp = await models.series.findAll(
            {
                where: { permit: true }
            }
        )
        res.send(resp);
    } catch (err) {
        res.send(err)
    }

};


module.exports = seriesController;