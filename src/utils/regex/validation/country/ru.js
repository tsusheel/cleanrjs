const regex = {
  // ✅ Phone: 10 digits (Indian-style, but can match any 10-digit)
  phone: /^\d{10}$/,

  // ✅ Postal Code: 5 or 6 digits (works for India, US)
  postalCode: /^\d{5,6}$/,

  // ✅ Date (YYYY-MM-DD)
  date: /^\d{4}-\d{2}-\d{2}$/,
};

export default regex;
