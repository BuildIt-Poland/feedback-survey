import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grommet } from 'grommet';

import Welcome from '../Welcome';
import GlobalStyle from '../GlobalStyle/GlobalStyle';
import theme from '../../styles/globalTheme';
import Survey from '../Survey';
import FinalPage from '../FinalPage';
import Main from './Main';

function App() {
  return (
    <Router>
      <Grommet theme={theme}>
        <Main>
          <GlobalStyle />
          <Switch>
            <Route exact path="/survey/:surveyId?/:clientName?" component={Survey} />
            <Route exact path="/final" component={FinalPage} />
            <Route exact path="/:surveyId?/:clientName?" component={Welcome} />
          </Switch>
        </Main>
      </Grommet>
    </Router>
  );
}
export default App;
