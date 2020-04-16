const thereIs = require('./exercise07_variavel_definida');

test('variable is defined', () => {
    expect(typeof thereIs).toBeDefined();
});

test('variable is not defined', () => {
    expect(typeof thereIsNot).toBe('undefined');
});
// No teste acima, tentei usar o ".toBeUndefined" e o ".not.toBeDefined", mas não passaram no teste.
