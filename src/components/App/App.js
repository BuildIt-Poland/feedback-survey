import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grommet } from 'grommet';

import Welcome from '../Welcome';
import GlobalStyle from '../GlobalStyle/GlobalStyle';
import theme from '../../styles/globalTheme';
import Survey from '../Survey';
import FinalPage from '../FinalPage';
import Header from '../Header/Header';
import { colorDarkBlue } from '../../styles/variables';

function App() {
  return (
    <Router>
      <Grommet theme={theme}>
        <GlobalStyle />
        <Header bgColor={colorDarkBlue} logoColor="light">
          Randstat
        </Header>
        <Switch>
          <Route exact path="/survey/:surveyId?/:clientName?" component={Survey} />
          <Route exact path="/final" component={FinalPage} />
          <Route exact path="/:surveyId?/:clientName?" component={Welcome} />
        </Switch>
      </Grommet>
    </Router>
  );
}
export default App;
