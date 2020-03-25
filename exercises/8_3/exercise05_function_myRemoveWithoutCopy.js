/* A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
1 Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
2 Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
3 Faça uma chamada para a função myRemoveWithoutCopy e verifique que o array passado por parâmetro sofreu alterações
4 Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado */

const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

const test1 = myRemoveWithoutCopy([1, 2, 3, 4], 3);
assert.deepEqual(test1, [1, 2, 4], 'test1');
const test2 = myRemoveWithoutCopy([1, 2, 3, 4], 3);
assert.notDeepEqual(test2, [1, 2, 3, 4], 'test2');
/*const test3 = myRemoveWithoutCopy([1, 2, 3, 4], [1, 2, 3, 4]);
assert.notDeepEqual(test3, [1, 2, 3, 4], 'test3');*/
const test4 = myRemoveWithoutCopy([1, 2, 3, 4], 5);
assert.deepEqual(test4, [1, 2, 3, 4], 'test4');
