const models = require('../models/index');

const rentalsControllers = {};


rentalsControllers.postrental_1 = async (req, res) => {
    try {
        let rental = req.body;
        let resp = await models.rentals.create(
            {
                id_article : rental.id_article
            }
        )
        res.send(resp)
    }catch (err) {
        res.send(err)
    }
}
module.exports = rentalsControllers