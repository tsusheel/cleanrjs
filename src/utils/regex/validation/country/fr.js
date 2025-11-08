const regex = {
  // ✅ Valid Examples
  // 01 23 45 67 89
  // +33 1 23 45 67 89
  // 0612345678
  // 07-89-45-12-34
  // 04.12.34.56.78
  phone: /^(?:\+33|0)[1-9](?:[\s.-]?\d{2}){4}$/,

  // ✅ Valid Examples
  // 75001 → Paris
  // 13008 → Marseille
  // 69002 → Lyon
  // 97100 → Guadeloupe
  postalCode: /^\d{5}$/,
};

export default regex;
