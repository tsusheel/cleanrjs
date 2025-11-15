import { kebabToCamel } from './string-case-change';

export default function createValidationDataObject(name, valid, invalid) {
  return {
    name: kebabToCamel(name),
    valid,
    invalid,
  };
}
