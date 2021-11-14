import {
  Resource as ResourceType,
  Endpoint as EndpointType,
  HttpMethod as HttpMethodType,
} from '@models';

const Title = ({ children }: { children: string }) => <h2 className="text-xl">{children}</h2>;

const Description = ({ children }: { children: string | undefined }) => {
  if (!children) {
    return null;
  }

  return <p>{children}</p>;
};

const Endpoint = ({ endpoint }: { endpoint: EndpointType }) => (
  <div>
    <EndpointSummary>{endpoint.summary}</EndpointSummary>
    <HttpMethod method={endpoint.method} path={endpoint.path} />
  </div>
);

const EndpointSummary = ({ children }: { children: string | undefined }) => {
  if (!children) {
    return null;
  }

  return <p className="font-bold">{children}</p>;
};

interface HttpMethodProps {
  method: HttpMethodType;
  path: string;
}

const HttpMethod = ({ method, path }: HttpMethodProps) => {
  return (
    <div>
      {method} {path}
    </div>
  );
};

interface PathProps {
  resource: ResourceType;
}

const Resource = ({ resource }: PathProps) => {
  return (
    <div className="border-b border-green-500">
      <pre key={resource.title}>{JSON.stringify(resource, null, 2)}</pre>
      <Title>{resource.title}</Title>
      <Description>{resource.description}</Description>
      {resource.endpoints.map((endpoint) => (
        <Endpoint key={`${endpoint.path}${endpoint.method}`} endpoint={endpoint} />
      ))}
    </div>
  );
};

export default Resource;
