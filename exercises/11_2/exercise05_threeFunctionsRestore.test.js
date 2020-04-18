// 5 Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

const service = require('./exercise04_threeFunctions');

test ('repete a primeira implementação, depois restaura a implementação original, e seus testes.', () => {
    const mockUpperCase = jest
    .spyOn(service, 'upperCase')
    .mockImplementation((str1) => str1.toLowerCase());

    expect(mockUpperCase('Marcelo')).toBe('marcelo');
    expect(mockUpperCase).toHaveBeenCalled();
    expect(mockUpperCase).toHaveBeenCalledTimes(1);
    expect(mockUpperCase).toHaveBeenCalledWith('Marcelo');

    service.upperCase.mockRestore();

    expect(service.upperCase('Marcelo')).toBe('MARCELO');
});
