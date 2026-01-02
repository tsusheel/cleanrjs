import { createEnum } from '~/src/helpers/create-enum';

export const inputType = createEnum({
  EMAIL: 'Email',
  MOBILE: 'Mobile',
  PASSWORD: 'Password',
  USERNAME: 'Username',
  URL: 'Url',
  POSTALCODE: 'Postal Code',
  DATE: 'Date',
  NUMBER: 'Number',
  ALPHABET: 'Alphabet',
  ALPHANUMERIC: 'Alphanumeric',
});
