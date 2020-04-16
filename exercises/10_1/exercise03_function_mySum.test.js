/* 3 A função mySum(arr) recebe um array arr e retorna a soma de seus elementos
Teste se a chamada mySum([1, 2, 3, 4]) retorna o valor 10
Teste se a chamada mySum([1, -2, -3, 4]) retorna o valor esperado */

const mySum = require('./exercise03_function_mySum');

test('[1, 2, 3, 4] elements sum is 10', () => {
    expect(mySum([1, 2, 3, 4])).toEqual(10);
  });

test('[1, -2, -3, 4] elements sum is 0', () => {
    expect(mySum([1, -2, -3, 4])).toEqual(0);
});
