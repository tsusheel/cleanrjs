import { z } from 'zod';
import pkg from '~/package.json';

const validationObject = {
  email: z.instanceof(RegExp) || z.function(),
  mobile: z.instanceof(RegExp) || z.function(),
  password: z.instanceof(RegExp) || z.function(),
  username: z.instanceof(RegExp) || z.function(),
  url: z.instanceof(RegExp) || z.function(),
  postalCode: z.instanceof(RegExp) || z.function(),
  date: z.instanceof(RegExp) || z.function(),
  number: z.instanceof(RegExp) || z.function(),
  alphabet: z.instanceof(RegExp) || z.function(),
  alphanumeric: z.instanceof(RegExp) || z.function(),
};

const validateFunctionsMap = {};

for (const [key, value] of Object.entries(validationObject)) {
  validateFunctionsMap[key] = z.function();
}

const versionSchema = z.object({
  [pkg.name]: z.string(),
  description: z.string(),
  license: z.string(),
});

const validateSchema = z.object(validateFunctionsMap);

// Export schemas
export const validationObjectSchema = z.object(validationObject);

export const CleanrSchema = z.object({
  validate: validateSchema,
  version: versionSchema,
  reinit: z.function(),
});
