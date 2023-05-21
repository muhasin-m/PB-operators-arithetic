const rewire = require("rewire")

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('8. Increment', () => {
    test('monkeyBusiness variable should exist', () => {
        const solution = rewire("../solution")
        const monkeyBusiness = solution.__get__("monkeyBusiness")
        expect(monkeyBusiness).toBeDefined()
    })

    test('monkeyBusiness variable should be incremented by 1', () => {
        const solution = rewire("../solution")
        const monkeyBusiness = solution.__get__("monkeyBusiness")
        expect(monkeyBusiness).toStrictEqual(91)
    })
})