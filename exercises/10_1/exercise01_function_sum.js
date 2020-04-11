/* 1 A função sum(a, b) retorna a soma do parâmetro a com o b
Teste se o retorno de sum(4, 5) é 9
Teste se o retorno de sum(0, 0) é 0
Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5)
Teste se a mensagem de erro é “parameters must be numbers” quando realizar a chamada sum(4, "5") */

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

test('ckeck if sum is defined', () => {
  expect(typeof sum).toBe('function');
});

test('sums 4 and 5', () => {
  expect(sum(4, 5)).toEqual(9);
});

test('sums 0 and 0', () => {
  expect(sum(0, 0)).toEqual(0);
});
