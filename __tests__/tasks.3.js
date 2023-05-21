const rewire = require("rewire")

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('3. Multiply', () => {
    test('console should print product of both variables', () => {
      const solution = rewire("../solution")
      const snackServings = solution.__get__("snackServings")
      const guests = solution.__get__("guests")
      require('../solution');
      expect(consoleSpy).toHaveBeenCalledWith(snackServings * guests);
    })
})
