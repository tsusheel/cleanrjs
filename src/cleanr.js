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
  country: country.in,
  overrideRegex: {},
};

function reinit(newOptions) {
  const options = { ...defaultOptions, ...newOptions };
  validate = generateValidators(options.country, options.overrideRegex);
}

export { version, reinit, validate };
