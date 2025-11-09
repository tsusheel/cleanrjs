const validNumbers = {
  key: 'number',
  expectedResult: true,
  data: ['12345678'],
};

const invalidNumbers = {
  key: 'number',
  expectedResult: false,
  data: ['1234e678'],
};

export { validNumbers, invalidNumbers };
