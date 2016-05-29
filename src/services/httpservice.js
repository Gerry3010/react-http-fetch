var Fetch = require('whatwg-fetch');
var baseURL = 'http://localhost:6060';

var service = {
    get: function(url) {
        console.log('making request...');
        return fetch(baseURL + url)
        .then(function(response){
            console.log('RES: ', response);
            return response.json();
        });
    }
}

module.exports = service;
