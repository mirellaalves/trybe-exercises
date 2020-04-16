// 1 Escreva um teste que verifique a chamada do callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const uppercase = require('./exercise01_uppercase');

test('todas as letras são maiúsculas', done => {
    expect.assertions(1); // Utilizar o assertion para garantir que não tenhamos um falso positivo.
    uppercase('mirella', callback => {
        expect(callback).toStrictEqual('MIRELLA');
    done();
    });
});

uppercase('marcelinho', console.log); // o console.log é um parâmetro, que é uma função, que é uma função pronta.
