import createValidationDataObject from '~/tests/helpers/create-validation-data-object';
import { getFileName } from '~/tests/helpers/get-filename.js';

const filename = getFileName(import.meta);

const valid = {
  expectedResult: true,
  data: [
    'https://example.com',
    'http://example.io',
    'www.example.co',
    'example.com',
    'https://sub.domain.dev/path/to/page',
    'https://cleanrjs.dev?ref=github',
    'http://localhost:3000',
  ],
};

const invalid = {
  expectedResult: false,
  data: ['htp://example.com', 'example', 'https://example.c', '://example.com'],
};

export default createValidationDataObject(filename, valid, invalid);
