
const apiUrl = 'https://swapi.dev/api/people/12/';

const result = fetch('https://swapi.dev/api/people/12/')
    .then((res) => {
        console.log(res.json());
    });