
// ==== REQUEST ====
// const request = require('request');

// request('https://swapi.dev/api/people/12/', (error, response, body) => {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });


// // ==== AXIOS ====
// const axios = require('axios');

// axios.get('https://swapi.dev/api/people/12/')
//     .then((res) => {
//         console.log(res.data);
//     })
//     .catch((err => {
//         console.log(err);
//     }));


// ==== NODE-FETCH ====

const fetch = require('node-fetch');

fetch('https://swapi.dev/api/people/12/')
    .then(res => res.json())
    .then(body => console.log(body));