import createValidationDataObject from '~/tests/helpers/create-validation-data-object';
import { getFileName } from '~/tests/helpers/get-filename.js';

const filename = getFileName(import.meta);

const valid = {
  expectedResult: true,
  data: [
    'cleanr_js',
    'cleanr.js',
    'User_123',
    'user.name',
    'username',
    '123456',
    '_user',
    'user__name',
  ],
};

const invalid = {
  expectedResult: false,
  data: ['username_', 'user!', 'username.'],
};

export default createValidationDataObject(filename, valid, invalid);
