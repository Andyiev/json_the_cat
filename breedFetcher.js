// breedFetcher.js
const request = require('request');
// Here is a function to organise a request to get some info from the site
const fetchBreedDescription = function(breedName,callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      console.log("Request failed: ",error);// If the request is failed
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback(("There is no cat with name " + breedName),null); //There is no cat with this breed name, because we received empty data (empty string (array))
      }
      callback(null,data); // Getting information  
    }
  });
};
module.exports = {fetchBreedDescription};