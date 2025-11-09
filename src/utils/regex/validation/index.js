const regex = {
  // ✅ Email: basic validation (simple & practical)
  email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,

  // ✅ Phone: 10 digits (Indian-style, but can match any 10-digit)
  mobile: /^\d{10}$/,

  // ✅ Strong Password: at least 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#_\-^])[A-Za-z\d@$!%*?&#_\-^]{8,}$/,

  // ✅ Username: only letters, numbers, underscores, and 3–16 characters
  username: /^[A-Za-z0-9._-]{3,20}(?<![_.])$/,

  // ✅ URL: http/https with optional query or hash
  url: /^(https?:\/\/)?((localhost(:\d+)?|[a-zA-Z0-9.-]+\.[A-Za-z]{2,}))([\/\w._~:/?#[\]@!$&'()*+,;=-]*)?$/,

  // ✅ Postal Code: 6 digits (works for India)
  postalCode: /^\d{6}$/,

  // ✅ Date (YYYY-MM-DD)
  date: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,

  // ✅ Only numbers
  number: /^\d+$/,

  // ✅ Only alphabets
  alphabet: /^[A-Za-z]+$/,

  // ✅ Alphanumeric (letters + numbers)
  alphanumeric: /^[A-Za-z0-9]+$/,
};

export default regex;
