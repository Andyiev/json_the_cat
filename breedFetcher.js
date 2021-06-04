// breedFetcher.js
const request = require('request');
// Here is a function to organise a request to get some info from the site
const fetchBreedDescription = function (breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (error) {
      callback(`Request failed: ${error}`, null);// If request failed by servers fault...
    } else if (data.length === 0) {
      callback("There is no cat with this name", null);//There is no cat with this breed name - we get this from the server
    } else {
      callback(null, data); // Getting information  
    }
  });
};
module.exports = { fetchBreedDescription };