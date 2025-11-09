const validPasswords = {
  key: 'password',
  expectedResult: true,
  data: ['Strong!Pass4'],
};

const invalidPasswords = {
  key: 'password',
  expectedResult: false,
  data: ['easypassword'],
};

export { validPasswords, invalidPasswords };
