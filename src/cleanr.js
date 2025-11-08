import generateValidators from '~/src/core/validators.js';
import country from '~/src/utils/countries';
import pkg from '~/package.json';

const version = {
  version: pkg.version,
  name: pkg.name,
  description: pkg.description,
  license: pkg.license,
};

let validate = generateValidators(country.in);

const defaultOptions = {
  country: country.in,
};

function init(newOptions) {
  const options = { ...defaultOptions, newOptions };
  validate = generateValidators(options.country);
}

export { version, init, validate };
