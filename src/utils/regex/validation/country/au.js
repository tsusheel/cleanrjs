const regex = {
  // ✅ Valid Examples
  // 0412 345 678
  // +61412 345 678
  // 03 9876 5432
  // 089 123 4567
  // +61-3-9876-5432
  phone: /^(?:\+?61|0)[2-478](?:[ -]?\d){8}$/,

  // ✅ Valid Examples
  // 2000 → Sydney NSW
  // 3000 → Melbourne VIC
  // 4000 → Brisbane QLD
  // 6000 → Perth WA
  postalCode: /^\d{4}$/,
};

export default regex;
