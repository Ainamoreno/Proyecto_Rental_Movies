const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db/db');
const router = require('./router');
const morgan = require('morgan');
const { sequelize } = require('./models/index')
let PORT = process.env.YOUR_PORT || process.env.PORT || 3000;
require('dotenv').config({path:'.env'})


/*Json, ejecutamos el método json de express que nos permitirá 
poder trabajar con formato json en nuestra app*/
app.use(cors());
app.use(express.json());
app.use(router);
app.use(morgan('dev'));


app.listen(PORT, () => {
    console.log(`Servidor arrancando en el puerto ${PORT}`);
    //con sync({force: true}) se sincroniza sequelize con nuestra DB, force hace que pueda sobreescribir tablas
    //con authenticate no sobreescribe y es más ligero, pero también se sincroniza
    db.authenticate().then(() => {
        console.log("Conectados a la DB")
    }).catch(error => {
        console.log('Se ha producido un error: ' + error)
    })
});