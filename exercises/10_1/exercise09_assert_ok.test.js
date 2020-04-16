const change = require('./exercise09_assert_ok');

test('variable is not true', () => {
    expect(change(true)).toBe(false);
});
