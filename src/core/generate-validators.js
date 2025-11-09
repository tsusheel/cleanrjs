import defaultValidations from '~/src/utils/validation/index.js';
import countryValidationMap from '~/src/utils/validation/country-map';
import country from '~/src/utils/countries';

function generateValidators(cnt = country.in, overrideValidations = {}) {
  const validators = {};
  const countryValidations = countryValidationMap[cnt];
  const validation = { ...defaultValidations, ...countryValidations, ...overrideValidations };

  for (const [key, value] of Object.entries(validation)) {
    validators[key] = (x) => value.test(x);
  }

  return validators;
}

export default generateValidators;
