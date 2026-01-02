import normalizeInput from '~/src/utils/validation/normalize-input';

/*
  - if value is a RegExp, create a validator function that normalizes the input and tests it against the RegExp
  - if value is a function, create a validator function that normalizes the input and passes it to the function
  - if value is neither a RegExp nor a function, throw a TypeError
*/
export default function createValidator(value, key) {
  if (value instanceof RegExp) {
    return (input) => {
      const normalizedInput = normalizeInput(key, input);
      if (normalizedInput == null) return false;
      return value.test(normalizedInput);
    };
  }
  if (typeof value === 'function') {
    return (input) => {
      const normalizedInput = normalizeInput(key, input);
      if (normalizedInput == null) return false;
      return value(normalizedInput);
    };
  }
  throw new TypeError(`Invalid validator type for key "${key}"`);
}
