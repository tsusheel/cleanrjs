import regex from './regex';

const validators = {
  email: (value) => regex.email.test(value),
  phone: (value) => regex.phone.test(value),
};

export default validators;
