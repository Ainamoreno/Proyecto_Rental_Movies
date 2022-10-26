const User = require('./users')
const Movie = require('./movies')
const Rental = require('./rentals')

User.hasMany(Rental);
Rental.belongsTo(User);

Movie.hasMany(Rental);
Rental.belongsTo(Movie);