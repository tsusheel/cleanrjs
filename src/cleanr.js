import generateValidators from '~/src/core/generate-validators.js';
import country from '~/src/utils/countries';
import pkg from '~/package.json';

const version = {
  [pkg.name]: pkg.version,
  description: pkg.description,
  license: pkg.license,
};

let validate = generateValidators();

// Default options
const defaultOptions = {
  country: country.in.key,
  overrideValidations: {},
};

function reinit(newOptions) {
  const options = { ...defaultOptions, ...newOptions };
  validate = generateValidators(options.country, options.overrideValidations);
}

export { version, reinit, validate };
