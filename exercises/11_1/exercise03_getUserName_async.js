// O código a seguir simula uma chamada ao banco de dados para buscar usuários. O resultado dessa busca é uma Promise, que é utilizada pelo método getUserName.
// 3 Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await.
// Dica: Utilize o try/catch para o caso de erro.

const users = {
    4: { name: 'Mark' },
    5: { name: 'Paul' }
};
    
const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (users[id]) {
        return resolve(users[id]);
      }
      return reject({ error: 'User with ' + id + ' not found.' });
    }, 500);  // setTimeout inserido para transformar a função em uma função assíncrona.
  });
}
    
const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

module.exports = getUserName;
