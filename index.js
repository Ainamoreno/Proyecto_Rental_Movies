const express = require('express');
const app = express();
// const db = require('./db/db');
const router = require('./router')
const PORT = 7000;

/*Json, ejecutamos el método json de express que nos permitirá 
poder trabajar con formato json en nuestra app*/
app.use(express.json());

app.use(router)

app.listen(PORT, () => {
    console.log(`Servidor arrancando en el puerto ${PORT}`)
});