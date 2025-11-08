import Cleanr from '../src/index.js';

test('validates email correctly', () => {
  expect(Cleanr.validate.email('user@example.com')).toBe(true);
  expect(Cleanr.validate.email('invalid')).toBe(false);
});
