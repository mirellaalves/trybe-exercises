// 4 O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios e retorna uma lista como resultado. Dada a URL 'https://api.github.com/users/tryber/repos', faça um teste que verifique que os repositórios 'sd-01-block22-project-queries-unite' e 'sd-01-week19-recipes-app-2' se encontram nessa lista.
// OBS.: repos do exercício alterados, pois não existem no api indicado.

const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

test('Repos are on the list', async () => {
  const repos = await getRepos('https://api.github.com/users/tryber/repos');
  expect(repos).toContain('sd-01-block22-project-queries-unite');
  expect(repos).toContain('sd-01-week19-recipes-app-2');
});
