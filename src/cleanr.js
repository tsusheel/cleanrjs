import generateValidators from '~/src/core/validation/generate-validators.js';
import { country as CT } from '~/src/utils/enums/country';
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

function resolveOptions(newOptions) {
  const country = newOptions?.country || defaultOptions.country;
  const overrideValidations = newOptions?.overrideValidations || newOptions?.overrideRegex || {};
  return { country, overrideValidations };
}

function reinit(newOptions) {
  const options = resolveOptions(newOptions);
  validate = generateValidators(options.country, options.overrideValidations);
}

function create(newOptions = {}) {
  let options = resolveOptions(newOptions);
  let instanceValidate = generateValidators(options.country, options.overrideValidations);

  const instance = {
    version,
    get validate() {
      return instanceValidate;
    },
    reinit(nextOptions = {}) {
      options = { ...options, ...resolveOptions(nextOptions) };
      instanceValidate = generateValidators(options.country, options.overrideValidations);
    },
  };
  return instance;
}

export { version, create, reinit, validate };
