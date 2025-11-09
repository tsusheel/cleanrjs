const validNumbers = {
  key: 'number',
  expectedResult: true,
  data: ['0', '1', '123', '987654'],
};

const invalidNumbers = {
  key: 'number',
  expectedResult: false,
  data: ['-1', '12.3', '1 2', 'abc', '12a'],
};

export { validNumbers, invalidNumbers };
