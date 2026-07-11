import createValidationDataObject from '~/tests/helpers/create-validation-data-object';
import { getFileName } from '~/src/helpers/get-filename.js';

const filename = getFileName(import.meta);

const valid = {
  expectedResult: true,
  data: ['Strong!Pass4', 'Abc@1234', 'CleaNer#9', 'Passwor4d-', '_passwo4D', '^Password4'],
};

const invalid = {
  expectedResult: false,
  data: [
    'easypassword',
    'EasyPassword',
    'EasyPassword123',
    'Pwd1!',
    'PASSWORD1',
    '',
    '   ',
    null,
    undefined,
  ],
};

export default createValidationDataObject(filename, valid, invalid);
