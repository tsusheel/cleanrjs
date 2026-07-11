import createValidator from '~/src/core/validation/create-validator.js';
import { inputType as IT } from '~/src/utils/input-type.js';

describe('createValidator', () => {
  test('Creates a regex validator', () => {
    const validator = createValidator(/^[A-Za-z]+$/, IT.ALPHABET);
    expect(validator('abc')).toBe(true);
    expect(validator('123')).toBe(false);
  });

  test('Creates a function validator', () => {
    const fn = (x) => x.length > 3;
    const validator = createValidator(fn, IT.LENGTH);
    expect(validator('abcd')).toBe(true);
    expect(validator('ab')).toBe(false);
  });

  test('throws for invalid types', () => {
    expect(() => createValidator(123, IT.NUMBER)).toThrow(TypeError);
  });
});
