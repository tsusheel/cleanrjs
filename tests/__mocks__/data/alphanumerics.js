const validAlphanumerics = {
  key: 'alphanumeric',
  expectedResult: true,
  data: ['abc123'],
};

const invalidAlphanumerics = {
  key: 'alphanumeric',
  expectedResult: false,
  data: ['abc@123'],
};

export { validAlphanumerics, invalidAlphanumerics };
