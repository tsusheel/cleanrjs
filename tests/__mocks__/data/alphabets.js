const validAlphabets = {
  key: 'alphabet',
  expectedResult: true,
  data: ['abc', 'ABC', 'Hello', 'world', 'JavaScript', 'Cleanrjs', 'vALIDATION'],
};

const invalidAlphabets = {
  key: 'alphabet',
  expectedResult: false,
  data: ['abc123', 'abc!', 'abc def', 'abc_def', 'abc-def', '', 'αβγ'],
};

export { validAlphabets, invalidAlphabets };
