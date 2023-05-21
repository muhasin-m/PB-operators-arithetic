const rewire = require("rewire")

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('11. Remainder', () => {
    test('remainder of division of resultOne by resultTwo should be printed in the console', () => {
        const solution = rewire("../solution")
        const resultOne = solution.__get__("resultOne")
        const resultTwo = solution.__get__("resultTwo")
        require('../solution');
        expect(consoleSpy).toHaveBeenCalledWith(resultOne % resultTwo);
    })
})