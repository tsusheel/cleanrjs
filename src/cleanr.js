import validators from '~/utils/validators.js';

function mask(value, pattern) {
  let i = 0;
  return pattern.replace(/#/g, () => value[i++] || '');
}

function validate(value) {
  return validators.email(value);
}

export { mask, validate };
