/* A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
1 Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
2 Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
3 Verifique que o array passado por parâmetro não sofreu alterações
4 Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado */

const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

/* const test1 = myRemove([1, 2, 3, 4], 3);
assert.Equal(test1, [1, 2, 3], 'test1'); */
const test2 = myRemove([1, 2, 3, 4], 3);
assert.notEqual(test2, [1, 2, 3, 4], 'test2');
/* const test3 = myRemove([1, 2, 3, 4], ???);
assert.notEqual(test3, [1, 2, 3, 4], 'test3'); */
const test4 = myRemove([1, 2, 3, 4], 5);
assert.notEqual(test4, [1, 2, 3, 4], 'test4');
