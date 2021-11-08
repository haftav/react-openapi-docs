import testSpec from '../testSpec.json';

import DocsGenerator from './DocsGenerator';
import Info from './components/Info';
import Paths from './components/Paths';
import { OpenApiSchema } from './interfaces';

const App = () => {
  return (
    <div>
      <DocsGenerator spec={testSpec as OpenApiSchema}>
        <Info />
        <Paths />
      </DocsGenerator>
    </div>
  );
};

export default App;
