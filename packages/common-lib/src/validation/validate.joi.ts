import { ObjectSchema, ValidationResult } from 'joi';

export function validate(schema: ObjectSchema, values: any): ValidationResult {
  return schema.validate(values, {
    abortEarly: false,
  });
}