import defaultRegex from '~/src/utils/regex/validation/index.js';
import regexCountryMap from '~/src/utils/regex/validation/regex-country-map';
import country from '~/src/utils/countries';

function generateValidators(cnt = country.in, overrideRegex = {}) {
  const validators = {};
  const countryRegex = regexCountryMap[cnt];
  const regex = { ...defaultRegex, ...countryRegex, ...overrideRegex };

  for (const [key, value] of Object.entries(regex)) {
    validators[key] = (x) => value.test(x);
  }

  return validators;
}

export default generateValidators;
