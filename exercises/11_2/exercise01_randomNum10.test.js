// 1 Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

function randomNum() {
    (Math.floor(Math.random() * 100) + 1);
}

test ('Testa se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
    randomNum = jest.fn().mockReturnValue(10);

    expect(randomNum()).toBe(10);
    expect(randomNum).toHaveBeenCalled();
    expect(randomNum).toHaveBeenCalledTimes(1);
});
