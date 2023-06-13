const capitalize = require('../js/capitalize.js');

test('returns the first letter of a word as a capital letter', () => {
  expect(capitalize('string')).toBe('String');
});