const rewire = require("rewire")

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('7. Monkey Fights', () => {
    test.each`
    variableName 
    ${"monkeyfights"}
    ${"resultTwo"}
    `('$variableName variable should exist', ({variableName}) => {
        const solution = rewire("../solution")
        const variable = solution.__get__(variableName)
        expect(variable).toBeDefined()
    });

    test.each`
    variableName | value
    ${"monkeyfights"} | ${20}
    `('$variableName variable should have value $value', ({variableName, value}) => {
        const solution = rewire("../solution")
        const variable = solution.__get__(variableName)
        expect(variable).toStrictEqual(value)
    });

    test('resultTwo variable should have correct value', () => {
        const solution = rewire("../solution")
        const monkeyfights = solution.__get__("monkeyfights")
        const monkeys = solution.__get__("monkeys")
        const bananas = solution.__get__("bananas")
        const variable = solution.__get__('resultTwo')
        expect(variable).toStrictEqual((monkeys + bananas) * monkeyfights)
    })

    test('console should print resultTwo', () => {
        const solution = rewire("../solution")
        const resultTwo = solution.__get__("resultTwo")
        require('../solution');
        expect(consoleSpy).toHaveBeenCalledWith(resultTwo);
    })
})