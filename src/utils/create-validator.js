export default function createValidator(value, key) {
  if (value instanceof RegExp) return (input) => value.test(input);
  if (typeof value === 'function') return (input) => value(input);
  throw new TypeError(`Invalid validator type for key "${key}"`);
}
