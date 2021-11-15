import OpenAPISchemaValidator from 'openapi-schema-validator';

import { OpenApiSchema, ReferenceObject } from '@models';

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

export function isReferenceObject(obj: unknown): obj is ReferenceObject {
  if ('$ref' in (obj as ReferenceObject)) {
    return true;
  }

  return false;
}
