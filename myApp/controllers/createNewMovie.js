var express = require('express');
var router = express.Router();

const moviesBL = require('../models/moviesJSON_BL');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('createNewMoviePage', {});
});

router.post('/newMovie', async function(req, res, next) {
    let genres = req.body.genre.split(" ");
    let movieId = await moviesBL.getID();
    let movie = {id: movieId, name: req.body.name, language: req.body.language, genre: genres};
    await moviesBL.addMovie(movie);
    res.render('menu',{});
  });

module.exports = router;