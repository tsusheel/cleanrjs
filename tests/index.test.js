jest.mock('../src/core/generate-validators.js', () => {
  const actual = jest.requireActual('../src/core/generate-validators.js');
  return {
    __esModule: true,
    default: jest.fn(actual.default),
  };
});

import Cleanr from '~/src/index.js';
import generateValidators from '~/src/core/generate-validators.js';

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
