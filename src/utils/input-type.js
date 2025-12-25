import { createEnum } from '~/src/helpers/create-enum';

export const inputType = createEnum([
  'EMAIL',
  'MOBILE',
  'PASSWORD',
  'USERNAME',
  'URL',
  'POSTALCODE',
  'DATE',
  'NUMBER',
  'ALPHABET',
  'ALPHANUMERIC',
]);
