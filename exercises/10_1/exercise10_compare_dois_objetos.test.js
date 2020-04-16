const obj = require('./exercise10_compare_dois_objetos');

test('obj1 and ob2 are identicals', () => {
  expect(obj1).toStrictEqual(obj2);
});
