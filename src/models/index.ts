import { OpenAPIV3 } from 'openapi-types';

// reexporting types here in case I want to extend
export type OpenApiSchema = OpenAPIV3.Document;

export type PathsObject = OpenAPIV3.PathsObject;

export type PathObject = OpenAPIV3.PathItemObject;

export type OperationObject = OpenAPIV3.OperationObject;

export type OpenAPIV3Tag = OpenAPIV3.TagObject;

export type HttpMethod = 'get' | 'put' | 'post' | 'delete' | 'options' | 'head' | 'patch' | 'trace';

export interface ConvertedSpec {
  info: Info;
  resources: Resource[];
  models: unknown;
}

export interface Info {
  title: string;
  description?: string;
  version: string;
}

export interface Resource {
  title: string;
  description?: string;
  endpoints: Endpoint[];
}

export type Endpoint = {
  path: string;
  method: HttpMethod;
} & OperationObject;
