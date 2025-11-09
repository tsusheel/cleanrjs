const validUrls = {
  key: 'url',
  expectedResult: true,
  data: ['https://github.com'],
};

const invalidUrls = {
  key: 'url',
  expectedResult: false,
  data: ['invalidurl'],
};

export { validUrls, invalidUrls };
