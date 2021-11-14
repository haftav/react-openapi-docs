import { useDocsContext } from '../DocsGenerator';

import Resource from './Resource';

interface PathsProps {
  children?: React.ReactNode;
}

const Resources = ({ children }: PathsProps) => {
  const { spec } = useDocsContext();
  const { resources } = spec;

  // supporting render prop syntax
  if (typeof children === 'function') {
    return (
      <>
        {resources.map((resource, idx, array) => {
          return children(resource, idx, array);
        })}
      </>
    );
  }

  return (
    <>
      {resources.map((resource) => {
        return <Resource key={resource.title} resource={resource} />;
      })}
    </>
  );
};

export default Resources;
