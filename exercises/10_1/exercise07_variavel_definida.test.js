const thereIs = require('./exercise07_variavel_definida');

test('variable is defined', () => {
    expect(typeof thereIs).not.toBe('undefined');
});

test('variable is not defined', () => {
    expect(typeof thereIsNot).toBe('undefined');
});
