/* 5 A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
Faça uma chamada para a função myRemoveWithoutCopy e verifique que o array passado por parâmetro sofreu alterações
Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado */

const myRemoveWithoutCopy = require('./exercise05_function_myRemoveWithoutCopy');

test('[1, 2, 3, 4], 3 parameters return [1, 2, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
});

test('[1, 2, 3, 4], 3 parameters do not return [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
});

test('[1, 2, 3, 4] parameter has changed', () => {
    const myRemoveWithoutCopyArr3 = [1, 2, 3, 4];
    myRemoveWithoutCopy(myRemoveWithoutCopyArr3, 1);
    expect(myRemoveWithoutCopy([1, 2, 3, 4])).not.toEqual(myRemoveWithoutCopyArr3);
});


