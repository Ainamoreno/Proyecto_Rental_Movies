const models = require('../models/index');

const rentalsControllers = {};

rentalsControllers.createRental = async (req, res) => {
    try {
        const { email } = req.body
        const userFound = await models.users.findAll({ where: { email: email } })
        let mapUser = userFound.map(user => user.dataValues)
        let objectUser = mapUser.map(id => id.id_user)
        console.log(objectUser[0])
        let rental = await models.rentals.create(
            {
                id_user: objectUser[0]
            }
        )
        let idRental = rental.dataValues.id_rental;
        const lastRental = await models.rentals.findAll({ where: { id_rental: idRental } })
        res.send(lastRental)
    } catch (error) {
        res.send(error)
    }
};

rentalsControllers.rentalArticle = async (req, res) => {
    // let idRental = req.params;
    let article = req.body;
    console.log(article.article)
    console.log(article.id_rental)
    let rental = await models.rentalsArticles.create({
        articleIdArticle: article.article,
        id_rental: article.id_rental
    })
    // console.log(idRental)
    res.send(rentalArticle)
    try {
        console.log(article)
        console.log(idRental.idRental)

    } catch (error) {
        res.send(error)
    }

};

rentalsControllers.rentalsUser = async (req, res) => {
    try {
        let idUser = req.params;
        let rentals = await models.rentals.findAll({ where: { id_user: idUser.idUser } })
        res.send(rentals);
    } catch (error) {
        res.send(error)
    }

}

module.exports = rentalsControllers