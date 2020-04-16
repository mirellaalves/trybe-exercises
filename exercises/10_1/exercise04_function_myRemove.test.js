/* 4 A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
Verifique que o array passado por parâmetro não sofreu alterações
Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado */

const myRemove = require('./exercise04_function_myRemove');

test('([1, 2, 3, 4], 3) parameters return [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

test('([1, 2, 3, 4], 3) parameters do not return [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
});

test('[1, 2, 3, 4] parameter does not change', () => {
    const myRemoveArr3 = [1, 2, 3, 4];
    expect(myRemove(myRemoveArr3)).toEqual([1, 2, 3, 4]);
});

test('[1, 2, 3, 4] parameter does not change', () => {
    const myRemoveArr3 = [1, 2, 3, 4];
    myRemove(myRemoveArr3, 1);
    expect(myRemove(myRemoveArr3)).toEqual([1, 2, 3, 4]);
});

test('([1, 2, 3, 4], 5) parameters return [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
