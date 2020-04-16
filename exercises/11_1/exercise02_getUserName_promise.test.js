// O código a seguir simula uma chamada ao banco de dados para buscar usuários. O resultado dessa busca é uma Promise, que é utilizada pelo método getUserName.
// 2 Utilizando a sintaxe de Promise, faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
// Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users para saber quais IDs existem.

const getUserName = require('./exercise02_getUserName_promise')

test('testa se encontrou um ID', ()=> {
    expect.assertions(1);
    getUserName(6).then(name => expect(name).toBe('Ana'))
});
