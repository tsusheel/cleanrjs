import createValidationDataObject from '~/tests/helpers/create-validation-data-object';

const validMobiles = {
  expectedResult: true,
  data: ['9876543210'],
};

const invalidMobiles = {
  expectedResult: false,
  data: ['9865'],
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
