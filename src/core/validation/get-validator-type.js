export default function getValidatorType(value) {
  if (value instanceof RegExp) return 'regex';
  if (typeof value === 'function') return 'function';
  return null;
}
