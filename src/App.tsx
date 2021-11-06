import testSpec from '../testSpec.json';

import { PathObject } from './types';

import DocsGenerator, { useDocsContext } from './DocsGenerator';

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

const Paths = () => {
  const { spec } = useDocsContext();
  const { paths } = spec;

  return (
    <>
      {Object.keys(paths).map((key) => (
        <div key={key}>
          <Path pathName={key} path={paths[key]} />
        </div>
      ))}
    </>
  );
};

interface PathProps {
  path: PathObject;
  pathName: string;
}

const Path = ({ path, pathName }: PathProps) => {
  const { get, put, post } = path;

  return (
    <div className="border-b border-green-500">
      <h2>{pathName}</h2>
      {path.get && <div>get</div>}
      {path.put && <div>put</div>}
      {path.post && <div>post</div>}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <DocsGenerator spec={testSpec}>
        <Info />
        <Paths />
      </DocsGenerator>
    </div>
  );
};

export default App;
