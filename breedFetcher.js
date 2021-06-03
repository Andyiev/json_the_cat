const request = require('request');
const arg = process.argv.slice(2)[0];
console.log(arg);

request(`https://api.thecatapi.com/v1/breeds/search?q=${arg}`, (error, response, body) => {
  if (error) {
    console.log("Request failed: ",error);
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("There is no cat with name");
    } else {
      console.log(data[0].description);
      console.log(typeof data);
    }
  }
});