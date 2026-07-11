import normalizeInput from '~/src/utils/validation/normalize-input.js';
import { inputType as IT } from '~/src/utils/input-type.js';

describe('normalizeInput', () => {
  test('Returns non-string values directly without throwing', () => {
    expect(normalizeInput(IT.MOBILE, null)).toBeNull();
    expect(normalizeInput(IT.MOBILE, undefined)).toBeUndefined();
    expect(normalizeInput(IT.MOBILE, 12345)).toBe(12345);
    expect(normalizeInput(IT.MOBILE, { a: 1 })).toEqual({ a: 1 });
  });

  test('Normalizes mobile number format correctly', () => {
    expect(normalizeInput(IT.MOBILE, '+1 (416) 555-1234')).toBe('14165551234');
    expect(normalizeInput(IT.MOBILE, '0412.345.678')).toBe('0412345678');
  });

  test('Normalizes URL format correctly', () => {
    expect(normalizeInput(IT.URL, '  google.com ')).toBe('http://google.com');
    expect(normalizeInput(IT.URL, 'https://yahoo.com')).toBe('https://yahoo.com');
  });

  test('Normalizes postal code format correctly', () => {
    expect(normalizeInput(IT.POSTALCODE, 'K1A  0B1')).toBe('K1A0B1');
  });

  test('Returns other input types directly', () => {
    expect(normalizeInput(IT.EMAIL, '  test@example.com  ')).toBe('  test@example.com  ');
  });
});
