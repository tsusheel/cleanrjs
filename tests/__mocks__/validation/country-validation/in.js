import createValidationDataObject from '~/tests/helpers/create-validation-data-object';

const validMobiles = {
  expectedResult: true,
  data: [
    '9876543210',
    '09876543210',
    '+919876543210',
    '+91 98765 43210',
    '+91-98765-43210',
    '+91 98 7654 3210',
  ],
};

const invalidMobiles = {
  expectedResult: false,
  data: [
    '9865',
    '+919876',
    '09876',
    '1234567890', // starts with 1 (must start with 6-9)
    '987654321098', // too long
    '',
    ' ',
    null,
    undefined,
  ],
};

const validPostalCodes = {
  expectedResult: true,
  data: ['175126'],
};

const invalidPostalCodes = {
  expectedResult: false,
  data: ['17512', '1751263', '7a12a7'],
};

const mobile = createValidationDataObject('mobile', validMobiles, invalidMobiles);
const postalCode = createValidationDataObject('postalCode', validPostalCodes, invalidPostalCodes);

export default { mobile, postalCode };
