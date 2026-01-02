import { z } from 'zod';
import pkg from '~/package.json';
import { inputType as IT } from '~/src/utils/input-type.js';

const validationObject = {
  [IT.EMAIL]: z.instanceof(RegExp) || z.function(),
  [IT.MOBILE]: z.instanceof(RegExp) || z.function(),
  [IT.PASSWORD]: z.instanceof(RegExp) || z.function(),
  [IT.USERNAME]: z.instanceof(RegExp) || z.function(),
  [IT.URL]: z.instanceof(RegExp) || z.function(),
  [IT.POSTALCODE]: z.instanceof(RegExp) || z.function(),
  [IT.DATE]: z.instanceof(RegExp) || z.function(),
  [IT.NUMBER]: z.instanceof(RegExp) || z.function(),
  [IT.ALPHABET]: z.instanceof(RegExp) || z.function(),
  [IT.ALPHANUMERIC]: z.instanceof(RegExp) || z.function(),
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
