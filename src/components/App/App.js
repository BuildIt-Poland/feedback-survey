import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grommet } from 'grommet';

import theme from '../../styles/globalTheme';
import GlobalStyle from '../GlobalStyle/GlobalStyle';
import Survey from '../Survey';
import FinalPage from '../FinalPage';
import Main from './Main';
import Welcome from '../Welcome';
import { fetchQuestions } from '../../services/api';

function App() {
  const [data, setData] = useState({ questions: [], answerTypes: {} });

  useEffect(() => {
    fetchQuestions().then(res => {
      setData(res.data);
    });
  }, []);

  return (
    <Router>
      <Grommet theme={theme}>
        <Main>
          <GlobalStyle />
          <Switch>
            <Route exact path="/survey/:surveyId?/:clientName?" render={props => <Survey {...props} data={data} />} />
            <Route exact path="/final" component={FinalPage} />
            <Route exact path="/:surveyId?/:clientName?" component={Welcome} />
          </Switch>
        </Main>
      </Grommet>
    </Router>
  );
}
export default App;
