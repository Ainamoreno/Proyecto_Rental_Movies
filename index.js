const express = require('express');
const app = express();
const db = require('./db/db');
const router = require('./router');
const morgan = require('morgan');
const PORT = 7000;

/*Json, ejecutamos el método json de express que nos permitirá 
poder trabajar con formato json en nuestra app*/
app.use(express.json());
app.use(router);
app.use(morgan('dev'));

//// AXIOS
const axios = require("axios");

// MOVIES

app.get('/moviesRated', async (req, res) => {
    try {
        const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=c4a520e4e71ab0a5e2f83a4b3c9aac47&language=es-ES&page=1'
        let resp = await axios(url);
        let movies = resp.data.results;
        let nameMovie = movies.map(title => title.title);
        res.send(nameMovie);
    } catch (err) {
        res.send(err)
    }

});

app.get('/movies/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=c4a520e4e71ab0a5e2f83a4b3c9aac47&language=en-US`;
        let result = await axios(url);
        res.send(result.data.title);
    } catch (err) {
        res.send(err);
    }

});

app.get('/movie/:name', async (req, res) => {
    try {
        let name = req.params.name;
        const url = `https://api.themoviedb.org/3/search/movie?api_key=c4a520e4e71ab0a5e2f83a4b3c9aac47&language=es-ES&query=${name}&page=1&include_adult=false`
        let result = await axios(url);
        let movies = result.data.results;
        let nameMovies = movies.map(movie => movie.title)
        res.send(nameMovies);
    } catch (err) {
        res.send(err);
    }

});

// app.get('/genre/:nameGenre', async (req, res) => {
//     try {
//         let id;
//         let nameGenre = req.params.nameGenre;

//         switch (nameGenre.toLowerCase()) {
//             case "acción":
//                 id = 28
//                 break;
//             case "aventura":
//                 id = 12
//                 break;
//             case "animación":
//                 id = 16
//                 break;
//             case "comedia":
//                 id = 35
//                 break;
//             case "crimen":
//                 id = 80
//                 break;
//             case "documental":
//                 id = 99
//                 break;
//             case "drama":
//                 id = 18
//                 break;
//             case "familia":
//                 id = 10751
//                 break;
//             case "fantasía":
//                 id = 14
//                 break;
//             case "historia":
//                 id = 36
//                 break;
//             case "terror":
//                 id = 27
//                 break;
//             case "música":
//                 id = 10402
//                 break;
//             case "misterio":
//                 id = 9648
//                 break;
//             case "romance":
//                 id = 10749
//                 break;
//             case "ciencia ficción":
//                 id = 878
//                 break;
//             case "película de tv":
//                 id = 10770
//                 break;
//             case "suspense":
//                 id = 53
//                 break;
//             case "bélica":
//                 id = 10752
//                 break;
//             case "western":
//                 id = 37
//                 break;
//         };
//         const url = `https://api.themoviedb.org/3/movie/popular?api_key=c4a520e4e71ab0a5e2f83a4b3c9aac47&language=es-ES`;
//         let result = await axios(url, {

//             where: {}
//         });
//         let movies = result.data.results;
//         let res = movies.map(movie => movie.genre_ids)
//         res.forEach((id) => {
//             id.forEach((num) => {
//                 console.log(num)
//             })
//         })

//         res.send(result)
//     } catch (err) {
//         res.send(err)
//     }
// })


// SERIES
app.get('/seriesRated', async (req, res) => {
    try {
        const url = 'https://api.themoviedb.org/3/tv/top_rated?api_key=c4a520e4e71ab0a5e2f83a4b3c9aac47&language=es-ES&page=1'
        let resp = await axios(url);
        let series = resp.data.results;
        let nameSerie = series.map(title => title.name);
        res.send(nameSerie);
    } catch (err) {
        res.send(err)
    }

});

app.get('/series/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const url = `https://api.themoviedb.org/3/tv/${id}?api_key=c4a520e4e71ab0a5e2f83a4b3c9aac47&language=es-ES`;
        let result = await axios(url);
        res.send(result.data.name);
    } catch (err) {
        res.send(err);
    }

});

app.get('/serie/:name', async (req, res) => {
    try {
        let name = req.params.name;
        const url = `https://api.themoviedb.org/3/search/tv?api_key=c4a520e4e71ab0a5e2f83a4b3c9aac47&language=es-ES&page=1&query=${name}&include_adult=false`
        let result = await axios(url);
        let movies = result.data.results;
        let nameMovies = movies.map(movie => movie.name)
        res.send(nameMovies);
    } catch (err) {
        res.send(err);
    }

});

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