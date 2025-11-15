import createValidationDataObject from '~/tests/helpers/create-validation-data-object';
import { getFileName } from '~/src/helpers/get-filename.js';

const filename = getFileName(import.meta);

const valid = {
  expectedResult: true,
  data: ['0', '1', '123', '987654'],
};

const invalid = {
  expectedResult: false,
  data: ['-1', '12.3', '1 2', 'abc', '12a'],
};

export default createValidationDataObject(filename, valid, invalid);
