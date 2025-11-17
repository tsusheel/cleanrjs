export default function createValidator(value, key) {
  if (value instanceof RegExp) {
    return (input) => {
      if (input == null) return false;
      return value.test(input);
    };
  }
  if (typeof value === 'function') {
    return (input) => {
      if (input == null) return false;
      return value(input);
    };
  }
  throw new TypeError(`Invalid validator type for key "${key}"`);
}
