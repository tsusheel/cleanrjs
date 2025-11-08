jest.mock('../src/core/generate-validators.js', () => {
  const actual = jest.requireActual('../src/core/generate-validators.js');
  return {
    __esModule: true,
    default: jest.fn(actual.default),
  };
});

import Cleanr from '../src/index.js';
import generateValidators from '../src/core/generate-validators.js';

test('validates email correctly', () => {
  expect(Cleanr.validate.email('user@example.com')).toBe(true);
  expect(Cleanr.validate.email('invalid')).toBe(false);
});

describe('reinit', () => {
  it('should reinitialize validate with new options', () => {
    const newOptions = {
      country: 'ca',
      overrideRegex: { phone: /123/ },
    };

    Cleanr.reinit(newOptions);

    expect(generateValidators).toHaveBeenCalledWith('ca', { phone: /123/ });
  });
});
