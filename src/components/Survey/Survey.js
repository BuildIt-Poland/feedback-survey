import React, { useState, useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Box } from 'grommet';

import { saveSurvey } from '../../services/api';
import { SurveyContext } from '../../context/SurveyContext';
import { surveyMathParams } from '../../types';
import { REQUIRED_FIELD, NO_QUESTIONS } from '../../constatnts/messages';
import { FINAL_PATH } from '../../constatnts/routes';
import SurveyField from '../SurveyField';
import SurveyButton from '../Button';
import Loading from '../Loading';
import ErrorQuestionsMessage from './ErrorQuestionsMessage';

const messages = {
  required: REQUIRED_FIELD
};

const renderFormFields = ({ questions, answerTypes }) => {
  return questions.map((field, index) => <SurveyField key={index} field={field} answerTypes={answerTypes} />);
};

const Survey = ({ match }) => {
  const surveyId = match ? match.params.surveyId : '';
  const { data, isLoading, error } = useContext(SurveyContext);
  const [surveyData, setSurveyData] = useState(data);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccessSave, setIsSuccessSave] = useState(false);
  const [saveError, setSaveError] = useState(null);

  useEffect(() => {
    setSurveyData(data);
  });

  const handleSubmit = ({ value }) => {
    const data = {
      surveyId,
      answers: value
    };
    saveSurvey(data).then(res => setIsSuccessSave(true), err => setSaveError(err));
    setIsSubmitted(true);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorQuestionsMessage message={error} />;
  }

  if (surveyData && !surveyData.questions.length) {
    return <ErrorQuestionsMessage message={NO_QUESTIONS} />;
  }

  if (isSubmitted) {
    return (
      <Redirect
        to={{
          pathname: FINAL_PATH,
          state: { isSuccessSave, saveError }
        }}
      />
    );
  }

  return (
    <Box align="center" justify="center" pad="medium">
      <Form onSubmit={handleSubmit} messages={messages}>
        {renderFormFields(surveyData)}
        <Box align="center">
          <SurveyButton buttonType="submit" label="submit" margin="xlarge" />
        </Box>
      </Form>
    </Box>
  );
};

Survey.propTypes = {
  match: surveyMathParams
};

export default Survey;
