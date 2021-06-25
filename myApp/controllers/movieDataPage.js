var express = require('express');
var router = express.Router();

const restDAL = require('../models/moviesBL');

/* GET home page. */
router.get('/', async function(req, res, next) {
    let restMovies = await restDAL.getMovies();
    res.render('movieDataPage', {movies: restMovies});
});

router.get('/:name', async function(req, res, next) {
    let movies = await restDAL.getMovies();
    let ourMovieArr = movies.filter(movie => movie.name == req.params.name);
    let ourMovie = ourMovieArr[0];
    res.render('showOneMovie', { movie : ourMovie });
});

module.exports = router;
