import * as React from 'react';

import ErrorBoundary from '@components/ErrorBoundary';

import useSpecTypeGuard from '@hooks/useSpecTypeGuard';

import convertSpec from '@utils/convertSpec';

import { OpenApiSchema, ConvertedSpec } from '@models';

interface DocsContextInterface {
  spec: ConvertedSpec;
}

const DocsContext = React.createContext<DocsContextInterface | null>(null);

interface DocsProviderProps {
  spec: unknown;
  children: React.ReactNode;
}

const DocsProvider = ({ spec: maybeValidSpec, children }: DocsProviderProps) => {
  useSpecTypeGuard(maybeValidSpec);

  const spec = maybeValidSpec as OpenApiSchema;
  const convertedSpec = convertSpec(spec);

  return <DocsContext.Provider value={{ spec: convertedSpec }}>{children}</DocsContext.Provider>;
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
