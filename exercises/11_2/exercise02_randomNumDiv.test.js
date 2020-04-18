// 2 Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

function randomNum() {
    (Math.floor(Math.random() * 100) + 1);
}

test ('implementação que recebe dois parâmetros e retorna a divisão do primeiro pelo segundo, ocorre uma única vez, e seus testes.', () => {
    randomNum = jest.fn().mockImplementationOnce((a, b) => a / b);

    expect(randomNum(9, 3)).toBe(3);
    expect(randomNum).toHaveBeenCalled();
    expect(randomNum).toHaveBeenCalledTimes(1);
    expect(randomNum).toHaveBeenCalledWith(9, 3);
});
