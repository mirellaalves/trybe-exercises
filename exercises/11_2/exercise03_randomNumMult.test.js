// 3 Ainda com a mesma função do primeiro exercício, utilizando o mock, cria uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova que recebe um parâmetro e retorne seu dobro. Faça os testes necessários.

test ('implementação que recebe três parâmetros e retorna sua multiplicação. e seus testes. Reseta a primeira implementação e implementa uma função que recebe um parâmetro e retorne seu dobro, e seus testes.', () => {
    randomNum = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(randomNum(1, 2, 3)).toBe(6);
    expect(randomNum).toHaveBeenCalled();
    expect(randomNum).toHaveBeenCalledTimes(1);
    expect(randomNum).toHaveBeenCalledWith(1, 2, 3);

    randomNum.mockReset();
    randomNum = jest.fn().mockImplementation((a) => a * 2);

    expect(randomNum(7)).toBe(14);
    expect(randomNum).toHaveBeenCalled();
    expect(randomNum).toHaveBeenCalledTimes(1);
    expect(randomNum).toHaveBeenCalledWith(7);
});
