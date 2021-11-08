import { OpenAPIV3 } from 'openapi-types';

// reexporting types here in case I want to extend
export type OpenApiSchema = OpenAPIV3.Document;

export type PathsObject = OpenAPIV3.PathsObject;

export type PathObject = OpenAPIV3.PathItemObject;

export type OperationObject = OpenAPIV3.OperationObject;