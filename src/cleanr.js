import generateValidators from '~/src/core/validation/generate-validators.js';
import { country as CT } from '~/src/utils/country';
import pkg from '~/package.json';
import { freezeObject } from './helpers/freeze-object';

const version = freezeObject({
  [pkg.name]: pkg.version,
  description: pkg.description,
  license: pkg.license,
});

let validate = generateValidators();

// Default options
const defaultOptions = {
  country: CT.IN.key,
  overrideValidations: {},
};

function reinit(newOptions) {
  const options = { ...defaultOptions, ...newOptions };
  validate = generateValidators(options.country, options.overrideValidations);
}

export { version, reinit, validate };
