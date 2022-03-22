

// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
 const myObject = {
     headers: {'Accept': 'application/json' }
 }

 fetch(API_URL, { headers: { Accept: 'application/json' } }).then(response => response.json()).then(data => document.getElementById('jokeContainer').innerHTML = data.joke) 
};

window.onload = () => fetchJoke();