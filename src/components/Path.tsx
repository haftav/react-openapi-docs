import { PathObject, OperationObject } from '../interfaces';

interface HttpMethodProps {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  endpoint: string;
  operationObject: OperationObject;
}

const HttpMethod = ({ method, endpoint, operationObject }: HttpMethodProps) => {
  return (
    <div>
      {method} {endpoint}{' '}
    </div>
  );
};

interface PathProps {
  path: PathObject;
  pattern: string;
}

const Path = ({ path, pattern }: PathProps) => {
  return (
    <div className="border-b border-green-500">
      {path.get ? (
        <div>
          <HttpMethod method="GET" endpoint={pattern} operationObject={path.get} />
          <div>{path.get.summary || null}</div>
          <div>{path.get.description || null}</div>
        </div>
      ) : null}
      {path.post && <HttpMethod method="POST" endpoint={pattern} operationObject={path.post} />}
      {path.put && <HttpMethod method="PUT" endpoint={pattern} operationObject={path.put} />}
      {path.delete && (
        <HttpMethod method="DELETE" endpoint={pattern} operationObject={path.delete} />
      )}
      {path.summary && <div>{path.summary}</div>}
    </div>
  );
};

export default Path;
