const validUsernames = {
  key: 'username',
  expectedResult: true,
  data: ['user_name'],
};

const invalidUsernames = {
  key: 'username',
  expectedResult: false,
  data: ['user-name'],
};

export { validUsernames, invalidUsernames };
