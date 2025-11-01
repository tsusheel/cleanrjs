export function mask(value, pattern) {
  let i = 0;
  return pattern.replace(/#/g, () => value[i++] || '');
}

export function validate(value, regex) {
  return regex.test(value);
}

export const validators = {
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  phone: (value) => /^\d{10}$/.test(value),
};
