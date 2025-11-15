import createValidationDataObject from '~/tests/helpers/create-validation-data-object';
import { getFileName } from '~/src/helpers/get-filename.js';

const filename = getFileName(import.meta);

const valid = {
  expectedResult: true,
  data: ['2025-01-01', '1999-12-31', '2024-02-29', '0001-01-01', '2025-11-09'],
};

const invalid = {
  expectedResult: false,
  data: [
    '2025-13-01',
    '2025-00-10',
    '2025-11-00',
    '2025-11-32',
    '25-11-09',
    '2025/11/09',
    '2025-1-9',
    '11-09-2025',
  ],
};

export default createValidationDataObject(filename, valid, invalid);
