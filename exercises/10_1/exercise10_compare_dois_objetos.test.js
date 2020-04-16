const obj = require('./exercise10_compare_dois_objetos');

test('obj1 and ob2 are identicals', () => {
  const obj1var = obj1;
  expect(obj1var).toStrictEqual(obj2);
});
