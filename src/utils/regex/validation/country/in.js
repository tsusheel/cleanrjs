const regex = {
  // ✅ Valid Examples
  // 9876543210
  // 09876543210
  // +919876543210
  // +91 9876543210
  // +91-9876543210
  // +91 98765 43210
  // +91-98765-43210
  // +91 98 7654 3210
  phone: /^(?:\+91[\-\s]?|0)?[6-9]\d{4}[\s\-]?\d{5}$/,

  // ✅ Valid Examples
  // 110001	New Delhi
  // 400001	Mumbai
  // 600001	Chennai
  // 700001	Kolkata
  // 560001	Bengaluru
  postalCode: /^[1-9][0-9]{5}$/,
};

export default regex;
