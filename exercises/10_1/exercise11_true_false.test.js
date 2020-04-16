const isAbove = require('./exercise11_true_false');

test('first number is grater then the second one', () => {
    expect(isAbove(2, 1)).toBeTruthy();
});

test('first number is not grater then the second one', () => {
    expect(isAbove(2, 10)).toBeFalsy();
});
