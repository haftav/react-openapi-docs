import * as React from 'react';

import { OpenApiSchema } from './interfaces';

// in progress
function createDocsInstance(spec: OpenApiSchema) {
  return {
    paths: [{ key: '/workflows', summary: 'test', operations: [] }],
  };
}

interface DocsContextInterface {
  spec: OpenApiSchema;
}

const DocsContext = React.createContext<DocsContextInterface | null>(null);

interface DocsProviderProps {
  spec: OpenApiSchema;
  children: React.ReactNode;
}

const DocsProvider = ({ spec, children }: DocsProviderProps) => {
  return <DocsContext.Provider value={{ spec }}>{children}</DocsContext.Provider>;
};

export function useDocsContext() {
  const docsContext = React.useContext(DocsContext);

  if (!docsContext) {
    throw new Error('Can only use inside DocsProvider');
  }

  return docsContext;
}

interface DocsGeneratorProps {
  spec: OpenApiSchema;
  children?: React.ReactNode;
}

const DocsGenerator = ({ spec, children }: DocsGeneratorProps) => {
  return <DocsProvider spec={spec}>{children}</DocsProvider>;
};

export default DocsGenerator;
