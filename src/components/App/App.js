import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grommet } from 'grommet';

import theme from '../../styles/globalTheme';
import { WELCOME_PATH, FINAL_PATH, SURVEY_PATH } from '../../constatnts/routes';
import { useFetch } from '../../hooks/useFetch';
import { SurveyContext } from '../../context/SurveyContext';
import GlobalStyle from '../GlobalStyle/GlobalStyle';
import Survey from '../Survey';
import FinalPage from '../FinalPage';
import Main from './Main';
import Welcome from '../Welcome';
import Header from '../Header';
import Container from './Container';
import Footer from '../Footer';

const App = () => {
  const fetchData = useFetch();

  return (
    <Router>
      <Container>
        <Header />
        <Main>
          <SurveyContext.Provider value={fetchData}>
            <Grommet theme={theme}>
              <GlobalStyle />
              <Switch>
                <Route exact path={SURVEY_PATH} component={Survey} />
                <Route exact path={FINAL_PATH} component={FinalPage} />
                <Route exact path={WELCOME_PATH} component={Welcome} />
              </Switch>
            </Grommet>
          </SurveyContext.Provider>
        </Main>
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
