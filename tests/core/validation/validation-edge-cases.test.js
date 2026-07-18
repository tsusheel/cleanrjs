import Cleanr from '~/src/index.js';

describe('Validation Edge Cases', () => {
  test('isValidURL returns false for non-string inputs', () => {
    // This directly exercises line 20 in src/core/validation/index.js
    expect(Cleanr.validate.url(12345)).toBe(false);
    expect(Cleanr.validate.url(null)).toBe(false);
    expect(Cleanr.validate.url(undefined)).toBe(false);
    expect(Cleanr.validate.url({ href: 'http://example.com' })).toBe(false);
  });

  test('isValidURL handles localhost and standard domains', () => {
    expect(Cleanr.validate.url('http://localhost')).toBe(true);
    expect(Cleanr.validate.url('http://localhost:8080')).toBe(true);
    expect(Cleanr.validate.url('http://example')).toBe(false); // TLD too short or invalid
    expect(Cleanr.validate.url('http://example.c')).toBe(false); // TLD too short
  });

  test('Other validators return false for null/undefined/non-strings safely', () => {
    expect(Cleanr.validate.email(12345)).toBe(false);
    expect(Cleanr.validate.mobile(null)).toBe(false);
    expect(Cleanr.validate.username(undefined)).toBe(false);
    expect(Cleanr.validate.password(true)).toBe(false);
  });
});
