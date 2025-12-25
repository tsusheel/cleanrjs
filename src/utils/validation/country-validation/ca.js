import { freezeObject } from '~/src/helpers/freeze-object';

const validations = freezeObject({
  // ✅ Valid Examples
  // +1 416-555-1234
  // (416) 555-1234
  // 416.555.1234
  // 4165551234
  // 1 647 222 3456
  mobile: /^(?:\+1\s?)?(?:\([2-9]\d{2}\)|[2-9]\d{2})[\s.-]?[2-9]\d{2}[\s.-]?\d{4}$/,

  // ✅ Valid Examples
  // K1A 0B1
  // B2C3D4
  // H0H 0H0 (Santa’s postal code 🎅)
  // T2X-1V4 (dash also accepted)
  postalCode: /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/,
});

export default validations;
