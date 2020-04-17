// O código a seguir simula uma chamada ao banco de dados para buscar usuários. O resultado dessa busca é uma Promise, que é utilizada pelo método getUserName.
// 3 Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await.
// Dica: Utilize o try/catch para o caso de erro.

const getUserName = require('./exercise03_getUserName_async')

// USUÁRIO ENCONTRADO
// Async/Await no lugar da promise:
test('testa se encontrou um ID', async () => {
    expect.assertions(1);
    const name = await getUserName(5);
    expect(name).toBe('Paul');
});

// Async/Await junto com .resolves:
test('testa se encontrou um ID', async () => {
    expect.assertions(1);
    await expect(getUserName(5)).resolves.toBe('Paul');
});

// USUÁRIO NÃO ENCONTRADO
// Async/Await no lugar da promise:
test('testa se encontrou um ID', async () => {
    expect.assertions(1);
    try {
      await getUserName(6);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 6 not found.' });
    }
});

// Async/Await junto com .rejects:
test('testa se não encontrou um ID', async () => {
    expect.assertions(1);
    await expect(getUserName(6)).rejects.toEqual({ error: 'User with 6 not found.' });
  });
