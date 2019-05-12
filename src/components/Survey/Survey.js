import React, { useState, useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Box, Heading } from 'grommet';

import { saveSurvey } from '../../services/api';
import { SurveyContext } from '../../context/SurveyContext';
import { surveyMatchParams } from '../../types';
import { REQUIRED_FIELD, NO_QUESTIONS } from '../../constatnts/messages';
import { FINAL_PATH } from '../../constatnts/routes';
import SurveyField from '../SurveyField';
import SurveyButton from '../Button';
import Loading from '../Loading';
import ErrorQuestionsMessage from './ErrorQuestionsMessage';
import Overlay from '../Overlay';
import { colorWhite } from '../../styles/designTokens';
import Page from '../Layout/Page';

const messages = {
  required: REQUIRED_FIELD
};

const renderFormFields = ({ questions, answerTypes }) =>
  questions.map((field, index) => <SurveyField key={index} field={field} answerTypes={answerTypes} />);

const renderPendingSave = isSubmitting => {
  if (!isSubmitting) {
    return null;
  }
  return (
    <Overlay>
      <Box animation="pulse" align="center" justify="center" pad="medium" height="90vh">
        <Heading level="2" color={colorWhite}>
          Saving survey...
        </Heading>
      </Box>
    </Overlay>
  );
};

const Survey = ({ match = { params: {} } }) => {
  const [surveyId, setSurveyID] = useState('');
  const { data, isLoading, error } = useContext(SurveyContext);
  const [surveyData, setSurveyData] = useState(data);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessSave, setIsSuccessSave] = useState(false);
  const [saveErrorMessage, setSaveErrorMessage] = useState('');

  useEffect(() => {
    setSurveyID(match.params.surveyId ? match.params.surveyId : '');
    setSurveyData(data);
  });

  const handleSubmit = ({ value }) => {
    setIsSubmitting(true);
    const data = {
      surveyId,
      answers: value
    };

    const saveData = async () => {
      try {
        await saveSurvey(data);
        setIsSuccessSave(true);
      } catch (error) {
        setSaveErrorMessage(error.message);
      }
      setIsSubmitting(false);
      setIsSubmitted(true);
    };

    saveData();
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

  if (isSubmitted && !isSubmitting) {
    return (
      <Redirect
        to={{
          pathname: FINAL_PATH,
          state: { isSuccessSave, saveErrorMessage }
        }}
      />
    );
  }

  return (
    <Page>
      {renderPendingSave(isSubmitting)}
      <Form onSubmit={handleSubmit} messages={messages}>
        {renderFormFields(surveyData)}
        <Box align="center">
          <SurveyButton buttonType="submit" label="submit" margin="xlarge" data-test-id="survey-submit-button" />
        </Box>
      </Form>
    </Page>
  );
};

Survey.propTypes = {
  match: surveyMatchParams
};

export default Survey;
