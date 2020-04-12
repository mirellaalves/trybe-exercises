const sum = require('./sum');

test('ckeck if sum is defined', () => {
    expect(typeof sum).toBe('function');
  });
  
  test('sums 4 and 5', () => {
    expect(sum(4, 5)).toEqual(9);
  });
  
  test('sums 0 and 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });
  