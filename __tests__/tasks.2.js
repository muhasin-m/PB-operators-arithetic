const rewire = require("rewire")

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('2. Subtract', () => {
    test('console should print result of "snackServings - guests"', () => {
      const solution = rewire("../solution")
      const snackServings = solution.__get__("snackServings")
      const guests = solution.__get__("guests")
      require('../solution');
      expect(consoleSpy).toHaveBeenCalledWith(snackServings - guests);
    })

    test('console should print result of "snackServings - guests"', () => {
      const solution = rewire("../solution")
      const snackServings = solution.__get__("snackServings")
      const guests = solution.__get__("guests")
      require('../solution');
      expect(consoleSpy).toHaveBeenCalledWith(snackServings - guests);
    })
})
