// Baseando-se nos códigos acima, defina uma função que retorna um número aleatório entre 1 e 100. A seguir, defina uma outra função que recebe um parâmetro e checa se o número aleatório é divisível pelo número do parâmetro.

function randomNumber() {
  return (Math.floor(Math.random() * 100) + 1);
}

function isDivisible(number) {
  return (randomNumber() % number === 0);
}

// 1 Escreva um teste que verifica que a função randomNumber() é chamada quando invocamos a isDivisible().
test('verifica que a função randomNumber() é chamada quando invocamos a isDivisible()', () => {
  randomNumber = jest.fn();

  isDivisible();
  expect(randomNumber).toHaveBeenCalled();
});

// 2 Teste que, quando a randomNumber() retorna um número par e isDivisible() recebe um dois, o retorno é true.
test('quando a randomNumber() retorna um número par e isDivisible() recebe um dois, o retorno é true', () => {
  randomNumber = jest
  .fn()
  .mockReturnValue(98);

  expect(isDivisible(2)).toBeTruthy();
});

// 3 Simule (mocke) dois valores para a função randomNumber() retornar e um terceiro valor default. Chame a função isDivisible() quatro vezes num mesmo teste e cheque que os retornos são conforme esperado.
test('simula valores para a função randomNumber()', () => {
  randomNumber = jest
  .fn()
  .mockReturnValue(24)
  .mockReturnValueOnce(14)
  .mockReturnValueOnce(15);

  expect(isDivisible(7)).toBeTruthy(); // randomNumber = 14 (primeira chamada)
  expect(isDivisible(7)).toBeFalsy(); // randomNumber = 15 (segunda chamada)
  expect(isDivisible(6)).toBeTruthy(); // randomNumber = 24 (demais chamadas, chamada padrão)
  expect(isDivisible(5)).toBeFalsy(); // randomNumber = 24 (demais chamadas, chamada padrão)
});
