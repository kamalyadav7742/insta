const express = require('express')
const app = express()

const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://instagram-scraper-2022.p.rapidapi.com/ig/info_username/',
  params: {user: 'kamal36335'},
  headers: {
    'X-RapidAPI-Key': 'e87aa3fee0mshf1faede1b894d64p17e5aajsnb929a1b95139',
    'X-RapidAPI-Host': 'instagram-scraper-2022.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);

  //quer start  

    response.render(index)
}).catch(function (error) {
	console.error(error);
});


const PORT = 5000;

app.listen(PORT, () => {
  console.clear();
  console.log(`listing in http://localhost:${PORT}`);
});