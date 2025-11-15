import createValidationDataObject from '~/tests/helpers/create-validation-data-object';
import { getFileName } from '~/src/helpers/get-filename.js';

const filename = getFileName(import.meta);

const valid = {
  expectedResult: true,
  data: ['9876543210'],
};

const invalid = {
  expectedResult: false,
  data: ['9865'],
};

export default createValidationDataObject(filename, valid, invalid);
