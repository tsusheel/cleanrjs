const validUsernames = {
  key: 'username',
  expectedResult: true,
  data: [
    'cleanr_js',
    'cleanr.js',
    'User_123',
    'user.name',
    'username',
    '123456',
    '_user',
    'user__name',
  ],
};

const invalidUsernames = {
  key: 'username',
  expectedResult: false,
  data: ['username_', 'user!', 'username.'],
};

export { validUsernames, invalidUsernames };
