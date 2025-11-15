export const validMobiles = {
  key: 'mobile',
  expectedResult: true,
  data: ['9876543210'],
};

export const invalidMobiles = {
  key: 'mobile',
  expectedResult: false,
  data: ['9865'],
};

export const validPostalCodes = {
  key: 'postalCode',
  expectedResult: true,
  data: ['175126'],
};

export const invalidPostalCodes = {
  key: 'postalCode',
  expectedResult: false,
  data: ['17512', '1751263', '7a12a7'],
};
