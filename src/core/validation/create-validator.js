import normalizeInput from '~/src/utils/validation/normalize-input';
import getValidatorType from '~/src/utils/validation/get-validator-type';

/*
  - if value is a RegExp, create a validator function that normalizes the input and tests it against the RegExp
  - if value is a function, create a validator function that normalizes the input and passes it to the function
  - if value is neither a RegExp nor a function, throw a TypeError
*/
export default function createValidator(value, key) {
  const type = getValidatorType(value);
  if (type === 'regex') {
    return (input) => {
      const normalizedInput = normalizeInput(key, input);
      if (normalizedInput == null) return false;
      return value.test(normalizedInput);
    };
  }
  if (type === 'function') {
    return (input) => {
      const normalizedInput = normalizeInput(key, input);
      if (normalizedInput == null) return false;
      return value(normalizedInput);
    };
  }
  throw new TypeError(`Invalid validator type for key "${key}"`);
}
