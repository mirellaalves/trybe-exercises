/* 6 A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divísivel por 3 ou 5 e retorna false caso num não seja um número
Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado */

const myFizzBuzz = require('./exercise06_function_myFizzBuzz');

test('num is divisible for 3 and 5', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
});

test('num is divisible for 3, but not for 5', () => {
    expect(myFizzBuzz(9)).toEqual('fizz');
});

test('num is divisible for 5, but not for 3', () => {
    expect(myFizzBuzz(25)).toEqual('buzz');
});

test('num is not divisible for 3 or 5', () => {
    expect(myFizzBuzz(19)).toEqual(19);
});

test('num is not a number', () => {
    expect(myFizzBuzz('number')).toBeFalsy();
});
