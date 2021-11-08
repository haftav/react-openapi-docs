import { useDocsContext } from '../DocsGenerator';

import { PathObject } from '../types';
import Path from './Path';

interface PathsProps {
  children?: React.ReactNode;
}

const Paths = ({ children }: PathsProps) => {
  const { spec } = useDocsContext();
  const { paths } = spec;

  const patterns = Object.keys(paths);

  // supporting render prop syntax
  if (typeof children === 'function') {
    return (
      <>
        {patterns.map((pattern, idx, array) => {
          const pathObject: PathObject | undefined = paths[pattern];

          return children(pathObject, idx, array);
        })}
      </>
    );
  }

  return (
    <>
      {patterns.map((pattern) => {
        const pathObject: PathObject | undefined = paths[pattern];

        if (!pathObject) {
          return null;
        }

        return <Path key={pattern} path={pathObject} pattern={pattern} />;
      })}
    </>
  );
};

export default Paths;
