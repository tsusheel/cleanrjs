const validDates = {
  key: 'date',
  expectedResult: true,
  data: ['1999-31-13'],
};

const invalidDates = {
  key: 'date',
  expectedResult: false,
  data: ['13-31-1999'],
};

export { validDates, invalidDates };
