const math = require('./Parte2');
jest.mock('./Parte2');

// 1 Faça o mock da funcão subtrair e teste sua chamada.
test('testa a chamada da funcão subtrair', () => {
    math.subtrair();
    expect(math.subtrair).toHaveBeenCalled();
})

// 2 Faça o mock da função multiplicar e implemente como retorno padrão o valor ‘10’. Teste a chamada e o retorno.
test('testa a chamada da funcão multiplicar e retorno igual a 10', () => {   
    math.multiplicar.mockReturnValue(10);

    math.multiplicar();
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar()).toBe(10);
})

// 3 Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.
test("Testa a chamada, o retorno e os parâmetros passados.", () => {
    // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno  
    math.somar.mockImplementation((a, b) => a + b);
    math.somar(1, 2);
  
    expect(math.somar).toHaveBeenCalled();
    expect(math.somar).toHaveBeenCalledWith(1, 2);
    expect(math.somar(1, 2)).toBe(3);
  });

// 4 Faça o mock da função dividir e implemente um retorno padrão com o valor ‘15’. Implemente também os seguintes valores para a primeira e segunda chamadas: ‘2’ e ‘5’. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.
test('testa retorno padrão com o valor ‘15’, primeira e segunda chamadas: ‘2’ e ‘5’, os parâmetros e quantas vezes a função foi chamada.', () => {   
    math.dividir.mockReturnValue(15);
    math.dividir.mockReturnValueOnce(2);
    math.dividir.mockReturnValueOnce(5);

    expect(math.dividir).toHaveBeenCalledTimes(0);
    expect(math.dividir()).toBe(2);
    expect(math.dividir).toHaveBeenCalledTimes(1);
    expect(math.dividir()).toBe(5);
    expect(math.dividir).toHaveBeenCalledTimes(2);
    expect(math.dividir()).toBe(15);
    expect(math.dividir).toHaveBeenCalledTimes(3);
    expect(math.dividir()).toBe(15);
    expect(math.dividir).toHaveBeenCalledTimes(4);
    math.dividir(30, 2);
    expect(math.dividir).toHaveBeenCalledWith(30, 2);
    expect(math.dividir(30, 3)).toBe(15); // Verificar como fazer a conta correta.
})

// 5 Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor ‘20’. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.