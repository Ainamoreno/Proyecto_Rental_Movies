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

// let date = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()+7}`
// const { Op } = require("sequelize");
// seriesController.getseries_4 = async (req, res) => {
//     let resp = await models.series.findAll(
//         {
//             where: { [Op.between] : {next_episode : date}}
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