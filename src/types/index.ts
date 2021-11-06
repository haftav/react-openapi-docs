export interface OpenApiSchema {
  info: {
    title: string;
    version: string;
  };
  paths: {
    [key: string]: PathObject;
  };
}

export interface PathObject {
  summary?: string;
  description?: string;
  get?: OperationObject;
  put?: OperationObject | string;
  post?: OperationObject;
  delete?: OperationObject;
  options?: OperationObject;
  head?: OperationObject;
  patch?: OperationObject;
}

interface OperationObject {
  tags?: string[];
  summary?: string;
  description?: string;
  externalDocs?: unknown;
  operationId?: string;
  parameters?: unknown[];
  requestBody?: unknown;
  responses: unknown;
  callbacks?: unknown;
  deprecated?: boolean;
  security?: unknown;
  servers?: unknown;
}
