const length = require('../js/strings.js');

test('returns the lenght of a string', () => {
  expect(length('string')).toBe(6);
});

test('returns length of strings to be 10 chars', () => {
  expect(length('stringstri')).toBe(10);
});

test('string is less than 1 or string is empty', () => {
  expect(() => {
    length('');
  }).toThrow();
});

test('string is greater than 10 chars long', () => {
  expect(() => {
    length('stringstrings');
  }).toThrow();
});
