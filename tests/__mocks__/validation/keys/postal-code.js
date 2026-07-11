import createValidationDataObject from '~/tests/helpers/create-validation-data-object';
import { getFileName } from '~/src/helpers/get-filename.js';

const filename = getFileName(import.meta);

const valid = {
  expectedResult: true,
  data: ['175126'],
};

const invalid = {
  expectedResult: false,
  data: ['17512', '1751263', '7a12a7', '', '   ', null, undefined],
};

export default createValidationDataObject(filename, valid, invalid);
