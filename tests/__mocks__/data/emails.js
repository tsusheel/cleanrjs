const validEmails = {
  key: 'email',
  expectedResult: true,
  data: ['valid.email@test.com'],
};

const invalidEmails = {
  key: 'email',
  expectedResult: false,
  data: ['invalid.email.com'],
};

export { validEmails, invalidEmails };
