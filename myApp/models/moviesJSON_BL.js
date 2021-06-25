const jFile = require('jsonfile');
const moviesDAL = require('../DAL/newMoviesDAL');
const restDAL = require('../DAL/restDAL');

const addMovie = async function(movie){
    let movies = await moviesDAL.getMovies();
    let obj = {id: movie.id, name: movie.name, language: movie.language, genre: movie.genre};
    movies.push(obj);
    return new Promise((resolve, reject) => {
            jFile.writeFile('newMovies.json', movies, function(err){
                if(err)
                    reject(err);
                else
                    resolve("ok");
            })
        })
}

const getID = async function(){
    let movies = await moviesDAL.getMovies();
    let titles = movies.map(movie => movie.name);
    let jsonLength = titles.length;
    let moviesREST = await restDAL.getData();
    let maxIDLength = moviesREST.data.reduce((acc,curr) => curr.id > acc ? curr.id : acc, 0);
    let id = jsonLength + maxIDLength + 1;
    return id;
}


module.exports = {addMovie, getID};