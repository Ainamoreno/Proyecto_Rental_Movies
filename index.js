const express = require('express');
const app = express();
// const db = require('./db/db');
const router = require('./router')
const PORT = 7000;

/*Json, ejecutamos el método json de express que nos permitirá 
poder trabajar con formato json en nuestra app*/
app.use(express.json());
app.use(router);


//// AXIOS
const axios = require("axios");

// Get

app.get('/moviesRated', async (req, res) => {
    const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=c4a520e4e71ab0a5e2f83a4b3c9aac47&language=es-ES&page=1'
    let resp = await axios(url);
    let movies = resp.data.results;
    let nameMovie = movies.map(title => title.title);
    res.send(nameMovie);
});

app.get('/movies/:id', async (req, res) => {
    let id = req.params.id;
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=c4a520e4e71ab0a5e2f83a4b3c9aac47&language=en-US`;

    let result = await axios(url);
    res.send(result.data.title)
});


// https://api.themoviedb.org/3/search/movie?api_key=c4a520e4e71ab0a5e2f83a4b3c9aac47&language=es-ES&query=hu%C3%A9rfana&page=1&include_adult=false

app.listen(PORT, () => {
    console.log(`Servidor arrancando en el puerto ${PORT}`)
});