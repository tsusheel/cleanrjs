const validMobiles = {
  key: 'mobile',
  expectedResult: true,
  data: ['9876543210'],
};

const invalidMobiles = {
  key: 'mobile',
  expectedResult: false,
  data: ['9865'],
};

export { validMobiles, invalidMobiles };
