import createValidationDataObject from '~/tests/helpers/create-validation-data-object';
import { getFileName } from '~/src/helpers/get-filename.js';

const filename = getFileName(import.meta);

const valid = {
  expectedResult: true,
  data: ['abc', 'ABC', 'abc123', 'A1B2C3', 'Hello123', 'cleanrjs', 'CLEANR123', 'x9', '1234'],
};

const invalid = {
  expectedResult: false,
  data: ['abc 123', 'abc_123', 'abc-123', '123!', 'hello.', 'abc@123', '', '   ', null, undefined],
};

export default createValidationDataObject(filename, valid, invalid);
