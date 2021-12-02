const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, resp, body) => {
    if (error) {
      return callback(`Failed to request details: ${error}`, null);
    }
    
    const data = JSON.parse(body);
    
    const breed = data[0];

    if (breed) {
      return callback(null,breed.description);
    } else {
      return callback(`Failed to find breed ${breedName}`, null);
    }
  }
  );
};


module.exports = { fetchBreedDescription };
// turn string into object
// locate first entry in the data array  and saves it in breed variable
//print description is breed include in command line, else fails