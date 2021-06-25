const axios = require('axios');

const getData = function(){
    return axios.get("https://api.tvmaze.com/shows");
}

module.exports = {getData};