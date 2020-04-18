// 6 Crie uma função que faça requisição para a api dog pictures (https://dog.ceo/dog-api/). Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor “request sucess”. O segundo deve interpretar que a requisição falhou e ter como valor “request failed”. Crie todos os testes que achar necessário.

function fetchURL() {
    return fetch('https://dog.ceo/dog-api/').then(response =>
      response.json()
              .then(json => response.ok ? Promise.resolve(json) : Promise.reject(json))
    );
}
module.exports = { fetchURL };
