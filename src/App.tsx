import testSpec from '../testSpec.json';

import DocsGenerator from './DocsGenerator';
import Info from './components/Info';
import Paths from './components/Paths';

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
