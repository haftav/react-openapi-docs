import * as React from 'react';

import ErrorBoundary from '@components/ErrorBoundary';

import { isValidSchema } from '@utils';

import { OpenApiSchema } from './interfaces';

interface DocsContextInterface {
  spec: OpenApiSchema;
}

const DocsContext = React.createContext<DocsContextInterface | null>(null);

interface DocsProviderProps {
  spec: unknown;
  children: React.ReactNode;
}

const DocsProvider = ({ spec, children }: DocsProviderProps) => {
  const valid = React.useRef(true);

  React.useMemo(() => {
    if (!isValidSchema(spec)) {
      valid.current = false;
    } else {
      valid.current = true;
    }
  }, [spec]);

  if (!valid.current) {
    throw new Error('Invalid schema supplied to DocsGenerator');
  }

  return (
    <DocsContext.Provider value={{ spec } as { spec: OpenApiSchema }}>
      {children}
    </DocsContext.Provider>
  );
};

export function useDocsContext() {
  const docsContext = React.useContext(DocsContext);

  if (!docsContext) {
    throw new Error('Can only use inside DocsProvider');
  }

  return docsContext;
}

interface DocsGeneratorProps {
  spec: unknown;
  children?: React.ReactNode;
}

const DocsGenerator = ({ spec, children }: DocsGeneratorProps) => {
  return (
    <ErrorBoundary>
      <DocsProvider spec={spec}>{children}</DocsProvider>
    </ErrorBoundary>
  );
};

export default DocsGenerator;
