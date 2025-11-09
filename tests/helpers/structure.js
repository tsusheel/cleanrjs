import { z } from 'zod';
import pkg from '~/package.json';

const regexObject = {
  email: z.instanceof(RegExp),
  mobile: z.instanceof(RegExp),
  password: z.instanceof(RegExp),
  username: z.instanceof(RegExp),
  url: z.instanceof(RegExp),
  postalCode: z.instanceof(RegExp),
  date: z.instanceof(RegExp),
  number: z.instanceof(RegExp),
  alphabet: z.instanceof(RegExp),
  alphanumeric: z.instanceof(RegExp),
};

const validateFunctionsMap = {};

for (const [key, value] of Object.entries(regexObject)) {
  validateFunctionsMap[key] = z.function();
}

const versionSchema = z.object({
  [pkg.name]: z.string(),
  description: z.string(),
  license: z.string(),
});

const validateSchema = z.object(validateFunctionsMap);

// Export schemas
export const regexObjectSchema = z.object(regexObject);

export const CleanrSchema = z.object({
  validate: validateSchema,
  version: versionSchema,
  reinit: z.function(),
});
