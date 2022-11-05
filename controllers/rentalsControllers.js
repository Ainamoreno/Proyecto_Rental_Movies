const models = require('../models/index');

const rentalsControllers = {};

rentalsControllers.createRental = async (req, res) => {
    try {
        const { email } = req.body
        const userFound = await models.users.findAll({ where: { email: email } })
        let mapUser = userFound.map(user => user.dataValues)
        let objectUser = mapUser.map(id => id.id_user)
        let rental = await models.rentals.create(
            {
                id_user: objectUser[0]
            }
        )
        let idRental = rental.dataValues.id_rental;
        const lastRental = await models.rentals.findAll({ where: { id_rental: idRental } })
        let mapRental = lastRental.map(rental => rental.dataValues)
        let idRent = mapRental.map(id => id.id_rental)
        let article = req.body;
        let rentalArticle = await models.rentals_articles.create({
            articleIdArticle: article.articleIdArticle,
            id_rental: idRent[0]
        })
        res.send({
            rentalArticle: rentalArticle,
            Rental: lastRental
        })
    } catch (error) {
        res.send(error)
    }
};

rentalsControllers.rentalsUser = async (req, res) => {
    let idUser = req.params;
    let rentals = await models.rentals.findAll({
        attributes: {
            exclude: ['rentalIdRental', 'articleIdArticle', 'rentalsArticleIdRentalArticle']
        },
        where: { id_user: idUser.idUser }
    })

    let rents = rentals.map(rent => rent.dataValues)
    let idRents = rents.map(id => id.id_rental)
    let rentArt = await models.rentals_articles.findAll(
        {
            where: { id_rental: idRents },
            include: {
                model: models.articles,
                attributes: ['id_article', 'name']
            }
        }
    )
    res.send(rentArt);
    try {

    } catch (error) {
        res.send(error)
    }

};

rentalsControllers.modifRental = async (req, res) => {
    let idUser = req.params;
    let idRental = req.params
    try {
        let Allrentals = await models.rentals.findAll({
            where: {
                id_user: idUser.idUser,
                id_rental: idRental.idRental
            }
        })
        let rent = Allrentals.map(rent => rent.dataValues)
        let idRent = rent.map(id => id.id_rental)
        let rentModif = await models.rentals_articles.findOne(
            {
                where: { id_rental: idRent },
                include: {
                    model: models.articles,
                    attributes: ['id_article', 'name']
                }
            }
        )
        let body = req.body
        await rentModif.update(
            {
                articleIdArticle: body.id_article,
                article: {
                    id_article: body.id_article,
                    name: body.name
                }
            }
        )
        res.send({
            Rental: rentModif,
            message: "Modificado correctamente"
        })
    } catch (error) {
        res.send(error)
    }

};

rentalsControllers.allRentals = async (req, res) => {
    let allRentals = await models.rentals.findAll();
    let rents = allRentals.map(rent => rent.dataValues)
    let idRents = rents.map(id => id.id_rental)
    let allRents = await models.rentals_articles.findAll(
        {
            where: { id_rental: idRents },
            include: {
                model: models.articles,
                attributes: ['id_article', 'name']
            }
        }
    )
    res.send(allRents)
}

module.exports = rentalsControllers