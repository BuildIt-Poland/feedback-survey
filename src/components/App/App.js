import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
        <Route exact path="/" component={Welcome} />
        <Route exact path="/survey" component={Survey} />
        <Route exact path="/final" component={FinalPage} />
      </Grommet>
    </Router>
  );
}
export default App;
