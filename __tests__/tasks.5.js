const rewire = require("rewire")

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('5. Arithmetic', () => {
  test.each`
  variableName 
  ${"drinks"}
  ${"resultOne"}
  `('$variableName variable should exist', ({variableName}) => {
    const solution = rewire("../solution")
    const variable = solution.__get__(variableName)
    expect(variable).toBeDefined()
  });

  test('drinks variable should have value 10', () => {
    const solution = rewire("../solution")
    const variable = solution.__get__('drinks')
    expect(variable).toStrictEqual(10)
  })

  test('resultOne variable should have correct value', () => {
    const solution = rewire("../solution")
    const snackServings = solution.__get__("snackServings")
    const guests = solution.__get__("guests")
    const drinks = solution.__get__("drinks")
    const variable = solution.__get__('resultOne')
    expect(variable).toStrictEqual(snackServings * guests / drinks)
  })

  test('console should print resultOne', () => {
    const solution = rewire("../solution")
    const resultOne = solution.__get__("resultOne")
    require('../solution');
    expect(consoleSpy).toHaveBeenCalledWith(resultOne);
  })
})
