const restDAL = require('../DAL/restDAL');

const getMovies = async function(){
    let resp = await restDAL.getData();
    let movies = resp.data;
    return movies;
}

const getMoviesByName= async function (movie){
    let resp = await restDAL.getData();
    let movies = resp.data;
    let filteredMovies = movies.filter(oneMovie => oneMovie.name.toLowerCase().includes(movie.toLowerCase()));
    return filteredMovies;
}

const getMoviesByGenre = async function (genre){
    let resp = await restDAL.getData();
    let movies = resp.data;
    let filteredMovies = movies.filter(oneMovie => oneMovie.genres.includes(genre));
    return filteredMovies;
}

const getMoviesByLanguage = async function (language){
    let resp = await restDAL.getData();
    let movies = resp.data;
    let filteredMovies = movies.filter(oneMovie => oneMovie.language.toLowerCase() == language.toLowerCase());
    return filteredMovies;
}

module.exports = {getMovies,getMoviesByName, getMoviesByLanguage, getMoviesByGenre};