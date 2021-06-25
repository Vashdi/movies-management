const jFile = require('jsonfile');

const getMovies = function(){
    return new Promise((resolve, reject) => {
        jFile.readFile('newMovies.json', function(err,data) {
            if(err)
                reject(err);
            else
                resolve(data);
        })
    })
}

module.exports = {getMovies};
