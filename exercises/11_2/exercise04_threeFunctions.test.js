// 4 Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.

const service = require('./exercise04_threeFunctions');
jest.mock('./exercise04_threeFunctions');

test ('implementação upperCase que retorna a string em caixa baixa, e seus testes.', () => {
    service.upperCase.mockImplementation((str1) => str1.toLowerCase());

    expect(service.upperCase('Marcelo')).toBe('marcelo');
    expect(service.upperCase).toHaveBeenCalled();
    expect(service.upperCase).toHaveBeenCalledTimes(1);
    expect(service.upperCase).toHaveBeenCalledWith('Marcelo');
});

test ('implementação firstLetter que retorna a última letra, e seus testes.', () => {
    service.firstLetter.mockImplementation((str2) => str2.charAt(str2.length-1));

    expect(service.firstLetter('Marcelo')).toBe('o');
    expect(service.firstLetter).toHaveBeenCalled();
    expect(service.firstLetter).toHaveBeenCalledTimes(1);
    expect(service.firstLetter).toHaveBeenCalledWith('Marcelo');
});

test ('implementação concatStr que deve receber três strings e concatená-las, e seus testes.', () => {
    service.concatStr.mockImplementation((str3, str4, str5) => str3.concat(str4, str5));

    expect(service.concatStr('Marcelo', 'Marcio', 'Mirella')).toBe('MarceloMarcioMirella');
    expect(service.concatStr).toHaveBeenCalled();
    expect(service.concatStr).toHaveBeenCalledTimes(1);
    expect(service.concatStr).toHaveBeenCalledWith('Marcelo', 'Marcio', 'Mirella');
});
