import * as React from 'react';

import { isValidSchema } from '@utils';

export default function useSpecTypeGuard(spec: unknown) {
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
}
