// 1 Baseando-se nos códigos acima, defina uma função que retorna um número aleatório entre 1 e 100. A seguir, defina uma outra função que recebe um parâmetro e checa se o número aleatório é divisível pelo número do parâmetro.
// Feito isso, escreva um teste que verifica que a função randomNumber() é chamada quando invocamos a isDivisible().
// 2 Teste que, quando a randomNumber() retorna um número par e isDivisible() recebe um dois, o retorno é true.

function randomNumber() {
  Math.floor(Math.random() * 100) + 1;
}

function isDivisible(number) {
  (randomNumber() % number) === 0;
}

test('verifica que a função randomNumber() é chamada quando invocamos a isDivisible()', () => {
  randomNumber = jest.fn();
  isDivisible();
  expect(randomNumber).toHaveBeenCalled();
});

test('quando a randomNumber() retorna um número par e isDivisible() recebe um dois, o retorno é true', () => {
  randomNumber = jest.fn();
  isDivisible(2);
  expect(randomNumber).toBeTruthy();
});
