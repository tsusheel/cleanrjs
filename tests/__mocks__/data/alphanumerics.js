const validAlphanumerics = {
  key: 'alphanumeric',
  expectedResult: true,
  data: ['abc', 'ABC', 'abc123', 'A1B2C3', 'Hello123', 'cleanrjs', 'CLEANR123', 'x9', '1234'],
};

const invalidAlphanumerics = {
  key: 'alphanumeric',
  expectedResult: false,
  data: ['abc 123', 'abc_123', 'abc-123', '123!', 'hello.', 'abc@123', ''],
};

export { validAlphanumerics, invalidAlphanumerics };
