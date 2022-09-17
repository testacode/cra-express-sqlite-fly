import { MantineProvider } from '@mantine/core';
import Hits from './Hits';

const App = () => (
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <div>
      <Hits />
    </div>
  </MantineProvider>
);

export default App;
