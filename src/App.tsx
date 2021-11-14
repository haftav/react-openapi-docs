import DocsGenerator from './DocsGenerator';
import Info from './components/Info';
import Resources from './components/Resources';

import testSpec from '../testSpec.json';

const App = () => {
  return (
    <div>
      <DocsGenerator spec={testSpec}>
        <Info />
        <Resources />
      </DocsGenerator>
    </div>
  );
};

export default App;
