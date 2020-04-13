const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!  
  fetch(API_URL, {method: 'GET', headers: { 'Accept': 'application/json' }})
  .then(response => response.json())
  .then(data => document.getElementById('jokeContainer').innerHTML = data.joke);
};

window.onload = () => fetchJoke();
