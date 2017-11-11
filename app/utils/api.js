var axios = require('axios');

//for exporting an object from this file

module.exports = {
  fetchPopularRepos: function(language) {
    var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');

    return axios.get(encodedURI) //this will return a promise
         .then(function(response) {
           return response.data.items;
         });

  }
}
