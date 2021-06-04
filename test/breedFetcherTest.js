// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (error, body) => {
      // we expect no error for this scenario
      assert.equal(error, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
       // compare returned description
      assert.equal(expectedDesc, body[0].description.trim());
      done();
    });
  });
  it('returns a note about invalid/non-existens/// breed, via callback', (done) => {
     fetchBreedDescription('ffffff', (error, body) => {
       console.log(error);// we expect error for this scenario
       assert.equal(error, "There is no cat with this name");

      
      done();
    });
  });
});
