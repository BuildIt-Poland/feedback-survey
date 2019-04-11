import React from 'react';
import { Grommet } from 'grommet';

import Welcome from '../Welcome';
import GlobalStyle from '../GlobalStyle/GlobalStyle';
import theme from '../../styles/globalTheme';

function App() {
  return (
    <Grommet theme={theme}>
      <GlobalStyle />
      <Welcome />
    </Grommet>
  );
}
export default App;
