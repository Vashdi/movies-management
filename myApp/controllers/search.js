var express = require('express');
var router = express.Router();

const restDAL = require('../DAL/restDAL');
const moviesBL = require('../models/moviesBL');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('searchMovie', {});
});

router.post('/', async function(req, res, next) {
    let allMovies = await moviesBL.getMovies();
    let movieByName = await moviesBL.getMoviesByName(req.body.name);
    if (req.body.language != "language"){
        let moviesByLanguage = await moviesBL.getMoviesByLanguage(req.body.language);
        let moviesNames = moviesByLanguage.map(movie => movie.name)
        let moviesByLanguageAndName = movieByName.filter(movie => moviesNames.includes(movie.name));
        movieByName = moviesByLanguageAndName;   
    }
    if (req.body.genre != "genre"){
        let moviesByGenre = await moviesBL.getMoviesByGenre(req.body.genre);
        let moviesNamesofGenre = moviesByGenre.map(movie => movie.name);
        let moviesByNameAndGenre = movieByName.filter(movie => moviesNamesofGenre.includes(movie.name));
        movieByName = moviesByNameAndGenre;
    }
    
    res.render('movieDataPage', {allOurMovies: allMovies, movies: movieByName});
  });

module.exports = router;