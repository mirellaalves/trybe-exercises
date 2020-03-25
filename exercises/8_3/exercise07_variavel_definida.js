/* Faça o teste de uma função que compara dois números e retorna true se o primeiro for maior que o segundo e false caso contrário. */

const assert = require('assert');

function isAbove(num1, num2) {
  return num1 > num2;
}

assert.strictEqual(isAbove(7, 6), true, 'test1');
assert.strictEqual(isAbove(6, 7), false, 'test2');
