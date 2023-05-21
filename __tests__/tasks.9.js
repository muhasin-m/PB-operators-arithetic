const rewire = require("rewire")

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('9. Decrement', () => {
    test('boredom variable should exist', () => {
        const solution = rewire("../solution")
        const boredom = solution.__get__("boredom")
        expect(boredom).toBeDefined()
    })

    test('boredom variable should be decremented by 1', () => {
        const solution = rewire("../solution")
        const boredom = solution.__get__("boredom")
        expect(boredom).toStrictEqual(12)
    })
})