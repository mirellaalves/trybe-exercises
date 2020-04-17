// O código a seguir simula uma chamada ao banco de dados para buscar usuários. O resultado dessa busca é uma Promise, que é utilizada pelo método getUserName.
// 2 Utilizando a sintaxe de Promise, faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
// Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users para saber quais IDs existem.

const getUserName = require('./exercise02_getUserName_promise')

// USUÁRIO ENCONTRADO
// Com o uso do .then:
test('testa se encontrou um ID', () => {
    expect.assertions(1);
    return getUserName(5).then(name => 
      expect(name).toBe('Paul'));
});

// Com o uso do .resolves:
test('testa se encontrou um ID', () => {
    expect.assertions(1);
    return expect(getUserName(5)).resolves.toBe('Paul');
});

// USUÁRIO NÃO ENCONTRADO
// Com o uso do .then:
test('testa se não encontrou um ID', () => {
    expect.assertions(1);
    return getUserName(6).catch(error =>
      expect(error).toEqual({ error: 'User with 6 not found.' })
    );
  });

// Com o uso do .rejects:
test('testa se não encontrou um ID', () => {
    expect.assertions(1);
    return expect(getUserName(6)).rejects.toEqual({ error: 'User with 6 not found.' });
  });
