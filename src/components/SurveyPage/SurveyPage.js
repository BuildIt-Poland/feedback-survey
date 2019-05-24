import React, { useState, useEffect, useContext } from 'react';

import { surveyMatchParams } from '../../types';
import Page from '../Layout/Page';
import Main from '../App/Main';
import { SurveyContext } from '../../context/SurveyContext';
import Loading from '../Loading';
import ErrorQuestionsMessage from '../Survey/ErrorQuestionsMessage';
import { NO_QUESTIONS } from '../../constatnts/messages';
import SurveyFormWithFormik from '../SurveyFormWithFormik';

const SurveyPage = ({ match = { params: {} } }) => {
  const { data, isLoading, error } = useContext(SurveyContext);
  const [surveyId, setSurveyID] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [surveyData, setSurveyData] = useState(data);

  useEffect(() => {
    setSurveyID(match.params.surveyId ? match.params.surveyId : '');
    setEmployeeName(match.params.employeeName ? match.params.employeeName : '');
    setSurveyData(data);
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorQuestionsMessage message={error} />;
  }

  if (surveyData && !surveyData.questions.length) {
    return <ErrorQuestionsMessage message={NO_QUESTIONS} />;
  }

  return (
    <Main>
      <Page>
        <SurveyFormWithFormik surveyData={surveyData} surveyId={surveyId} employeeName={employeeName} />
      </Page>
    </Main>
  );
};

SurveyPage.propTypes = {
  match: surveyMatchParams
};

export default SurveyPage;
