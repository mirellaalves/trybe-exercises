/* 3 A função mySum(arr) recebe um array arr e retorna a soma de seus elementos
Teste se a chamada mySum([1, 2, 3, 4]) retorna o valor 10
Teste se a chamada mySum([1, -2, -3, 4]) retorna o valor esperado */

const assert = require('assert');

function mySum(arr) {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

// implemente seus testes aqui
const test1 = mySum([1, 2, 3, 4]);
assert.strictEqual(test1, 10, 'test1');
const test2 = mySum([1, -2, -3, 4]);
assert.strictEqual(test2, 0, 'test2');

module.exports = mySum;
