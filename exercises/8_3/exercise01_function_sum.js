/* A função sum(a, b) retorna a soma do parâmetro a com o b
Teste se o retorno de sum(4, 5) é 9
Teste se o retorno de sum(0, 0) é 0
Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5)
Teste se a mensagem de erro é “parameters must be numbers” quando realizar a chamada sum(4, "5") */

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

const test1 = sum(4, 5);
assert.strictEqual(test1, 9, 'test1');
const test2 = sum(0, 0);
assert.strictEqual(test2, 0, 'test2');
/* const test3 = sum(4, '5');
assert.strictEqual(test3, throw new Error('parameters must be numbers'), 'test3'); */
