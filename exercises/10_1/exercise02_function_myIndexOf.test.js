/* 2 A função myIndexOf(arr, item) recebe um array arr, um item e retorna o índice do item ou -1 caso o item não pertença ao array arr
Teste se a chamada myIndexOf([1, 2, 3, 4], 3) retorna o valor esperado
Teste se a chamada myIndexOf([1, 2, 3, 4], 5) retorna o valor esperado */

const myIndexOf = require('./exercise02_function_myIndexOf');

test('([1, 2, 3, 4]), 3 parameters return 2', () => {
    expect(myIndexOf([1, 2, 3, 4], 3)).toEqual(2);
  });

test('([1, 2, 3, 4]), 5 parameters return 2', () => {
    expect(myIndexOf([1, 2, 3, 4], 5)).toEqual(-1);
});
