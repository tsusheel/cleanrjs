const validPostalCodes = {
  key: 'postalCode',
  expectedResult: true,
  data: ['175126'],
};

const invalidPostalCodes = {
  key: 'postalCode',
  expectedResult: false,
  data: ['17512', '1751263', '7a12a7'],
};

export { validPostalCodes, invalidPostalCodes };
