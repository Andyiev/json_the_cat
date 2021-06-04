// index.js
const { fetchBreedDescription } = require('./breedFetcher');// requiring the library
const breedName = process.argv[2]; //getting the breed name from terminal (customer)
// calling the function to send a request and get the information
fetchBreedDescription(breedName,(error, data) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(`The ${breedName} cat is - ${data[0].description}`);
  }
});
