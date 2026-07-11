import createValidationDataObject from '~/tests/helpers/create-validation-data-object';

const validMobiles = {
  expectedResult: true,
  data: ['89031234567', '+79031234567', '+7 (912) 345-67-89', '8 (912) 345-67-89'],
};

const invalidMobiles = {
  expectedResult: false,
  data: [
    '9865',
    '9876543220', // missing 7 or 8 prefix
    '0079031234567',
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
