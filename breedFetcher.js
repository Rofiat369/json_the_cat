const request = require('request');
// allows for user input in command line
const breedName = process.argv.slice(2);

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (error, resp, body) => {
  if (error) {
    return console.log('Failed to request details: ', error);
  }
  const data = JSON.parse(body);
  const breed = data[0];
  if (breed) {
    console.log(breed.description);
  } else {
    console.log(`Failed to find breed ${breedName}`);
  }
}
);
// turn string into object
// locate first entry in the data array  and saves it in breed variable
//print description is breed include in command line, else fails