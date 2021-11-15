import * as React from 'react';

import { isValidSchema } from '@utils';

export default function useSpecTypeGuard(spec: unknown) {
  const isValid = React.useMemo(() => {
    if (!isValidSchema(spec)) {
      return false;
    } else {
      return true;
    }
  }, [spec]);

  if (!isValid) {
    throw new Error('Invalid schema supplied to DocsGenerator');
  }
}
