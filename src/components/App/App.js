import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Grommet } from 'grommet';

import Welcome from '../Welcome';
import GlobalStyle from '../GlobalStyle/GlobalStyle';
import theme from '../../styles/globalTheme';
import Main from '../Main/Main';
import Agreed from '../Agreed/Agreed';

function App() {
  return (
    <Router>
      <Grommet theme={theme}>
        <GlobalStyle />
        <Route exact path="/" component={Welcome} />
        <Route exact path="/agreed" component={Agreed} />
        <Route exact path="/survey" component={Main} />
      </Grommet>
    </Router>
  );
}
export default App;
