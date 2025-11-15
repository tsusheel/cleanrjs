import createValidator from '~/src/utils/create-validator.js';

describe('createValidator', () => {
  test('Creates a regex validator', () => {
    const validator = createValidator(/^[A-Za-z]+$/, 'alphabet');
    expect(validator('abc')).toBe(true);
    expect(validator('123')).toBe(false);
  });

  test('Creates a function validator', () => {
    const fn = (x) => x.length > 3;
    const validator = createValidator(fn, 'length');
    expect(validator('abcd')).toBe(true);
    expect(validator('ab')).toBe(false);
  });

  test('throws for invalid types', () => {
    expect(() => createValidator(123, 'number')).toThrow(TypeError);
  });
});
