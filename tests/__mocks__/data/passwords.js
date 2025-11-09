const validPasswords = {
  key: 'password',
  expectedResult: true,
  data: ['Strong!Pass4', 'Abc@1234', 'CleaNer#9', 'Passwor4d-', '_passwo4D', '^Password4'],
};

const invalidPasswords = {
  key: 'password',
  expectedResult: false,
  data: ['easypassword', 'EasyPassword', 'EasyPassword123', 'Pwd1!', 'PASSWORD1'],
};

export { validPasswords, invalidPasswords };
