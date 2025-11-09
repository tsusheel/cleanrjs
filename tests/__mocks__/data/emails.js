const validEmails = {
  key: 'email',
  expectedResult: true,
  data: [
    'user@example.com',
    'user.name@example.com',
    'user_name@domain.co',
    'user-name@domain.io',
    'user+test@sub.domain.com',
    'hello123@cleanrjs.dev',
    'x@x.ai',
    'user.name@sub.domain.dev',
  ],
};

const invalidEmails = {
  key: 'email',
  expectedResult: false,
  data: [
    'userexample.com',
    'user@.com',
    'user@com',
    'user@domain.',
    'user@domain.c',
    'user@@domain.com',
    'user name@domain.com',
    '@domain.com',
    'user@@domain.com',
  ],
};

export { validEmails, invalidEmails };
