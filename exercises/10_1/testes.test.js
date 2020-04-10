const calcs = require('./calcs')
const array = require('./array')

describe('Suíte de Testes', () => {

  test('soma 1 e 2 para dar 3', () => {
     expect(calcs.sum(1, 2)).toEqual(3)
  })

  test('divide 10 por 3 para dar 3.33...', () => {
     expect(calcs.division(10, 3)).toBeCloseTo(3.33)
  })

  test('retorna apenas os pares no array', () => {
     let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
     let array2 = [2, 4, 6, 8, 10]
     expect(array(array1)).toEqual(array2)
  })

  test('to contain', () => {
    let arraycont = ['item1', 'item2', 'item3']
    expect(array.addItem4(arraycont)).toContain('item4')
  })

  test('3 mais 3', () => {
    let valor = 3 + 3
    expect(valor).toBeGreaterThan(5) ///maior que 5
    expect(valor).toBeGreaterThanOrEqual(6) ///maior ou igual a 6
    expect(valor).toBeLessThan(8) ///menor que 8
    expect(valor).toBeLessThanOrEqual(7) ///menor ou igual a 7
    expect(valor).not.toEqual(5) ///não igual a 5
  })

})