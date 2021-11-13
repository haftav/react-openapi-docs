import { OpenApiSchema, HttpMethod, OperationObject } from '@interfaces';

interface Document {
  info: Info;
  resources: Resource[];
  models: unknown;
}

interface Info {
  title: string;
  description?: string;
  version: string;
}

interface Resource {
  title: string;
  description?: string;
  endpoints: Endpoint[];
}
interface ResourceMap {
  [key: string]: Resource;
}

type Endpoint = {
  path: string;
  method: HttpMethod;
} & OperationObject;

function isMethodKey(str: string): str is HttpMethod {
  const methods = {
    get: true,
    put: true,
    post: true,
    delete: true,
    options: true,
    head: true,
    patch: true,
    trace: true,
  };

  if (str in methods) {
    return true;
  }

  return false;
}

export default function converter(spec: OpenApiSchema): Document {
  const { info: specInfo, paths: specPaths, tags: specTags } = spec;

  // info
  const info: Info = {
    title: specInfo.title,
    version: specInfo.version,
  };

  if (specInfo.description) {
    info.description = specInfo.description;
  }

  // resources

  // 1. build initial resource map through tags
  // technically I should iterate through tags in operation objects too but ignoring for now
  const resourceMap: ResourceMap = {};

  // adds entry for each tag with empty endpoints list
  // question: should I use map to remember order of insertion?
  specTags?.forEach((tag) => {
    if (tag.name in resourceMap === false) {
      resourceMap[tag.name] = {
        title: tag.name,
        description: tag.description,
        endpoints: [],
      };
    }
  });

  // 2. iterate through paths, adding paths to resource map as we go
  Object.keys(specPaths).forEach((pathString) => {
    const specPath = specPaths[pathString];

    if (specPath) {
      Object.keys(specPath).forEach((specPathKey) => {
        if (isMethodKey(specPathKey)) {
          const maybeOperation = specPath[specPathKey];

          if (maybeOperation) {
            const operation: OperationObject = maybeOperation;
            const endpoint: Endpoint = {
              ...operation,
              method: specPathKey,
              path: pathString,
            };

            endpoint.tags?.forEach((tag) => {
              if (tag in resourceMap) {
                resourceMap[tag].endpoints.push(endpoint);
              }
            });
          }
        }
      });
    }
  });

  // build resource list from map
  const resources = Object.keys(resourceMap).map((key) => {
    return resourceMap[key];
  });

  return {
    info,
    resources,
    models: [],
  };
}
