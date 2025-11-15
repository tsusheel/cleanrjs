const validations = {
  // ✅ Valid Examples
  // +1 416-555-1234
  // (416) 555-1234
  // 416.555.1234
  // 4165551234
  // 1 647 222 3456
  mobile: /^(?:\+1\s?)?(?:\([2-9]\d{2}\)|[2-9]\d{2})[\s.-]?[2-9]\d{2}[\s.-]?\d{4}$/,

  // ✅ Valid examples:
  // 12345
  // 12345-6789
  // 12345 6789
  postalCode: /^\d{5}(?:[-\s]\d{4})?$/,
};

export default validations;
