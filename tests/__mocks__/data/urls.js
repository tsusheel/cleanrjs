const validUrls = {
  key: 'url',
  expectedResult: true,
  data: [
    'https://example.com',
    'http://example.io',
    'www.example.co',
    'example.com',
    'https://sub.domain.dev/path/to/page',
    'https://cleanrjs.dev?ref=github',
    'http://localhost:3000',
  ],
};

const invalidUrls = {
  key: 'url',
  expectedResult: false,
  data: ['htp://example.com', 'example', 'https://example.c', '://example.com'],
};

export { validUrls, invalidUrls };
