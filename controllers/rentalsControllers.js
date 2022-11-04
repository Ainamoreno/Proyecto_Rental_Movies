const models = require('../models/index');

const rentalsControllers = {};

rentalsControllers.postrental_1 = async (req, res) => {
    try {
        let id = req.params.id
        let resp = await models.rentals.create (
            {
                id_user : id
            }
        )
        let rental = req.body

        let respRental = await models.rentals_articles.create(
            {
                id_rental : rental.id_rental,
                articleIdArticle : rental.articleIdArticle
            }
        )
        res.send(
            respRental
        )
    }catch (err) {
        res.send(err)
    }
};

module.exports = rentalsControllers