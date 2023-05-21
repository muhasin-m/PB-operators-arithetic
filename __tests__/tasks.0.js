const rewire = require("rewire")

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('0. Variables', () => {
    test.each`
    variableName 
    ${"snackServings"}
    ${"guests"}
    `('$variableName variable should exist', ({variableName}) => {
        const solution = rewire("../solution")
        const variable = solution.__get__(variableName)
        expect(variable).toBeDefined()
    });

    test.each`
    variableName 
    ${"snackServings"}
    ${"guests"}
    `('$variableName variable should have number value', ({variableName}) => {
        const solution = rewire("../solution")
        const variable = solution.__get__(variableName)
        expect(typeof variable).toBe("number")
    });
})
