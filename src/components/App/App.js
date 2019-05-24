import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { WELCOME_PATH, FINAL_PATH, SURVEY_PATH } from '../../constatnts/routes';
import { useFetch } from '../../hooks/useFetch';
import { SurveyContext } from '../../context/SurveyContext';
import GlobalStyle from '../GlobalStyle/GlobalStyle';
import Survey from '../Survey';
import FinalPage from '../FinalPage';
import WelcomePage from '../WelcomePage';
import Header from '../Header';
import Container from './Container';
import Footer from '../Footer';

const App = () => {
  const fetchData = useFetch();

  return (
    <Router>
      <Container>
        <Header />
        <SurveyContext.Provider value={fetchData}>
          <GlobalStyle />
          <Switch>
            <Route exact path={SURVEY_PATH} component={Survey} />
            <Route exact path={FINAL_PATH} component={FinalPage} />
            <Route exact path={WELCOME_PATH} component={WelcomePage} />
          </Switch>
        </SurveyContext.Provider>
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
