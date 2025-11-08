const regex = {
  // ✅ Email: basic validation (simple & practical)
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

  // ✅ Phone: 10 digits (Indian-style, but can match any 10-digit)
  phone: /^\d{10}$/,

  // ✅ Strong Password: at least 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,

  // ✅ Username: only letters, numbers, underscores, and 3–16 characters
  username: /^[a-zA-Z0-9_]{3,16}$/,

  // ✅ URL: http/https with optional query or hash
  url: /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[^\s]*)?$/,

  // ✅ Postal Code: 6 digits (works for India)
  postalCode: /^\d{6}$/,

  // ✅ Date (YYYY-MM-DD)
  date: /^\d{4}-\d{2}-\d{2}$/,

  // ✅ Only numbers
  number: /^\d+$/,

  // ✅ Only alphabets
  alphabets: /^[A-Za-z]+$/,

  // ✅ Alphanumeric (letters + numbers)
  alphanumeric: /^[A-Za-z0-9]+$/,
};

export default regex;
