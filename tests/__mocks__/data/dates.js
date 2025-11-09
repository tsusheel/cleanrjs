const validDates = {
  key: 'date',
  expectedResult: true,
  data: ['2025-01-01', '1999-12-31', '2024-02-29', '0001-01-01', '2025-11-09'],
};

const invalidDates = {
  key: 'date',
  expectedResult: false,
  data: [
    '2025-13-01',
    '2025-00-10',
    '2025-11-00',
    '2025-11-32',
    '25-11-09',
    '2025/11/09',
    '2025-1-9',
    '11-09-2025',
  ],
};

export { validDates, invalidDates };
