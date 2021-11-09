import DocsGenerator from './DocsGenerator';
import Info from './components/Info';
import Paths from './components/Paths';

import testSpec from '../testSpec.json';

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
