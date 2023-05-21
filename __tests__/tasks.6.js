const rewire = require("rewire")

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('6. Monkeys', () => {
    test.each`
    variableName 
    ${"monkeys"}
    ${"bananas"}
    `('$variableName variable should exist', ({variableName}) => {
        const solution = rewire("../solution")
        const variable = solution.__get__(variableName)
        expect(variable).toBeDefined()
    });

    test.each`
    variableName | value
    ${"monkeys"} | ${15}
    ${"bananas"} | ${9}
    `('$variableName variable should have value $value', ({variableName, value}) => {
        const solution = rewire("../solution")
        const variable = solution.__get__(variableName)
        expect(variable).toStrictEqual(value)
    });

    test('console should print division result', () => {
        const solution = rewire("../solution")
        const monkeys = solution.__get__("monkeys")
        const bananas = solution.__get__("bananas")
        require('../solution');
        expect(consoleSpy).toHaveBeenCalledWith(monkeys / bananas);
      })
})