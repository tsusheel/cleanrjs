import createValidationDataObject from '~/tests/helpers/create-validation-data-object';
import { getFileName } from '~/tests/helpers/get-filename.js';

const filename = getFileName(import.meta);

const valid = {
  expectedResult: true,
  data: [
    'user@example.com',
    'user.name@example.com',
    'user_name@domain.co',
    'user-name@domain.io',
    'user+test@sub.domain.com',
    'hello123@cleanrjs.dev',
    'x@x.ai',
    'user.name@sub.domain.dev',
  ],
};

const invalid = {
  expectedResult: false,
  data: [
    'userexample.com',
    'user@.com',
    'user@com',
    'user@domain.',
    'user@domain.c',
    'user@@domain.com',
    'user name@domain.com',
    '@domain.com',
    'user@@domain.com',
  ],
};

export default createValidationDataObject(filename, valid, invalid);
