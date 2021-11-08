import { useDocsContext } from '../DocsGenerator';

const Info = () => {
  const { spec } = useDocsContext();
  const { info } = spec;

  return (
    <div className="border border-red-400">
      <h1 className="text-center">{info.title}</h1>
      <h3 className="text-center">{info.version}</h3>
    </div>
  );
};

export default Info;
