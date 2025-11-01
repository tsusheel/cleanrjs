import Cleanr from '../src/cleanr.js';

test('validates email correctly', () => {
  expect(Cleanr.validators.email('user@example.com')).toBe(true);
  expect(Cleanr.validators.email('invalid')).toBe(false);
});
