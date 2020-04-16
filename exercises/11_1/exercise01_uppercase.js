// 1 Escreva um teste que verifique a chamada do callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const uppercase = (str, callback) => {
  setTimeout(() => {
    const upcase = str.toUpperCase();
    callback(upcase);
  }, 500);    
}
// setTimeout usado para transformar a função em uma função assincrona.

module.exports = uppercase;
