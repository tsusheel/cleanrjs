import normalizeInput from '~/src/utils/normalize-input';

export default function createValidator(value, key) {
  if (value instanceof RegExp) {
    return (input) => {
      const normalizedInput = normalizeInput(input);
      if (normalizedInput == null) return false;
      return value.test(normalizeInputs(normalizedInput));
    };
  }
  if (typeof value === 'function') {
    return (input) => {
      const normalizedInput = normalizeInput(input);
      if (normalizedInput == null) return false;
      return value(normalizeInputs(normalizedInput));
    };
  }
  throw new TypeError(`Invalid validator type for key "${key}"`);
}
