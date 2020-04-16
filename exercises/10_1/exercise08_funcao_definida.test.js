const thereIs = require('./exercise08_funcao_definida');

test('function is defined', () => {
    expect(typeof thereIs).toBeDefined();
});

test('function is not defined', () => {
    expect(typeof thereIsNot).toBe('undefined');
});
// No teste acima, tentei usar o ".toBeUndefined" e o ".not.toBeDefined", mas não passaram no teste.
