const thereIs = require('./exercise08_funcao_definida');

test('function is defined', () => {
    expect(typeof thereIs).not.toBe('undefined');
});

test('function is not defined', () => {
    expect(typeof thereIsNot).toBe('undefined');
});
