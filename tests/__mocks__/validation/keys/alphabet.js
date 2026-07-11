import createValidationDataObject from '~/tests/helpers/create-validation-data-object';
import { getFileName } from '~/src/helpers/get-filename.js';

const filename = getFileName(import.meta);

const valid = {
  expectedResult: true,
  data: ['abc', 'ABC', 'Hello', 'world', 'JavaScript', 'Cleanrjs', 'vALIDATION'],
};

const invalid = {
  expectedResult: false,
  data: ['abc123', 'abc!', 'abc def', 'abc_def', 'abc-def', '', 'αβγ', '', '   ', null, undefined],
};

export default createValidationDataObject(filename, valid, invalid);
