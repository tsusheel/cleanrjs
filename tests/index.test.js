import { jest } from '@jest/globals';

jest.unstable_mockModule('~/src/core/validation/generate-validators.js', () => {
  return {
    __esModule: true,
    default: jest.fn(),
  };
});

const { default: generateValidators } = await import(
  '~/src/core/validation/generate-validators.js'
);
const Cleanr = (await import('~/src/index.js')).default;

describe('reinit', () => {
  it('Should reinitialize validate with new options', () => {
    const newOptions = {
      country: 'ca',
      overrideValidations: { phone: /123/ },
    };

    Cleanr.reinit(newOptions);

    expect(generateValidators).toHaveBeenCalledWith('ca', { phone: /123/ });
  });
});
