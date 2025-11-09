const validAlphabets = {
  key: 'alphabet',
  expectedResult: true,
  data: ['abcdef'],
};

const invalidAlphabets = {
  key: 'alphabet',
  expectedResult: false,
  data: ['abc4ef'],
};

export { validAlphabets, invalidAlphabets };
