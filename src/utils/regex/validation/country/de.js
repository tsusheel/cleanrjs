const regex = {
  // ✅ Valid Examples
  // 030 123456 → Berlin
  // 089-12345678 → Munich
  // +49 30 123456 → International format
  // 040/1234567 → Hamburg
  // 0711.987654 → Stuttgart
  phone: /^(?:\+49|0)[1-9]\d{1,4}[\s./-]?\d{3,}$/,

  // ✅ Valid Examples
  // 10115 (Berlin)
  // 20095 (Hamburg)
  // 80331 (Munich)
  postalCode: /^\d{5}$/,
};

export default regex;
