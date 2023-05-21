const rewire = require("rewire")

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('10. Happiness', () => {
    test('happiness variable should exist', () => {
        const solution = rewire("../solution")
        const happiness = solution.__get__("happiness")
        expect(happiness).toBeDefined()
    })

    test('happiness variable should hold result of "bananas - monkeys"', () => {
        const solution = rewire("../solution")
        const happiness = solution.__get__("happiness")
        const monkeys = solution.__get__("monkeys")
        const bananas = solution.__get__("bananas")
        expect(happiness).toStrictEqual(monkeys - bananas)
    })

    test('result of "happiness + monkeyfights" should be printed in the console', () => {
        const solution = rewire("../solution")
        const happiness = solution.__get__("happiness")
        const monkeyfights = solution.__get__("monkeyfights")
        require('../solution');
        expect(consoleSpy).toHaveBeenCalledWith(happiness + monkeyfights);
    })
})