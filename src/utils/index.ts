import OpenAPISchemaValidator from 'openapi-schema-validator';

import { OpenApiSchema } from '../interfaces';

const validator = new OpenAPISchemaValidator({
  version: 3,
});

export function isValidSchema(json: unknown): json is OpenApiSchema {
  const validationResult = validator.validate(json as OpenApiSchema);

  if (validationResult.errors.length > 0) {
    return false;
  }

  return true;
}
