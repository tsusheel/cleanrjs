import defaultValidations from '~/src/utils/validation/index.js';
import countryValidationMap from '~/src/utils/validation/country-validation-map';
import country from '~/src/utils/countries';
import createValidator from '~/src/core/validation/create-validator';
import deepFreezeObject from '~/src/helpers/deep-freeze-object';

function generateValidators(cnt = country.in.key, overrideValidations = {}) {
  const validators = {};
  const countryValidations = countryValidationMap[cnt];
  const validation = deepFreezeObject({
    ...defaultValidations,
    ...countryValidations,
    ...overrideValidations,
  });

  for (const [key, value] of Object.entries(validation)) {
    validators[key] = createValidator(value, key);
  }

  return validators;
}

export default generateValidators;
