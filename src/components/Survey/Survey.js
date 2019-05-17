import React, { useState, useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { Box, Heading } from 'grommet';
import { Formik } from 'formik';

import { saveSurvey } from '../../services/api';
import { SurveyContext } from '../../context/SurveyContext';
import { surveyMatchParams } from '../../types';
import { NO_QUESTIONS, REQUIRED_QUESTION } from '../../constatnts/messages';
import { FINAL_PATH } from '../../constatnts/routes';
import { colorWhite } from '../../styles/designTokens';
import SurveyField from '../SurveyField';
import SurveyButton from '../Button';
import Loading from '../Loading';
import ErrorQuestionsMessage from './ErrorQuestionsMessage';
import Overlay from '../Overlay';
import Page from '../Layout/Page';
import Main from '../App/Main';

const ScrollAnchor = styled.div`
  position: absolute;
`;

const renderFormFields = ({ questions, answerTypes }, values, errors, onChange, setFieldValue, scrollFieldRef) =>
  questions.map((field, index) => {
    const isFirstError = Object.keys(errors)[0] === field.name;
    return (
      <React.Fragment key={index}>
        {isFirstError ? <ScrollAnchor ref={scrollFieldRef} /> : null}
        <SurveyField
          key={`field-${index}`}
          field={field}
          answerTypes={answerTypes}
          error={errors[field.name]}
          value={values[field.name]}
          onChange={onChange}
          setFieldValue={setFieldValue}
        />
      </React.Fragment>
    );
  });

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

const scrollToRef = (ref, offset = 0) => {
  window.scrollTo({
    top: ref.current.offsetTop - offset,
    left: 0,
    behavior: 'smooth'
  });
};

const Survey = ({ match = { params: {} } }) => {
  const { data, isLoading, error } = useContext(SurveyContext);
  const [surveyId, setSurveyID] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [surveyData, setSurveyData] = useState(data);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessSave, setIsSuccessSave] = useState(false);
  const [saveErrorMessage, setSaveErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const scrollTopRef = useRef(null);
  const scrollFieldRef = useRef(null);

  useEffect(() => {
    setSurveyID(match.params.surveyId ? match.params.surveyId : '');
    setEmployeeName(match.params.employeeName ? match.params.employeeName : '');
    setSurveyData(data);
  });

  const questionValidate = values => {
    const { questions } = data;
    let errors = {};
    questions
      .filter(item => item.required)
      .filter(item => !values[item.name])
      .forEach(item => {
        errors[item.name] = REQUIRED_QUESTION;
      });

    return errors;
  };

  const submitSurvey = answers => {
    setIsSubmitting(true);
    const data = {
      surveyId,
      employeeName,
      answers
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
    <Main>
      <Page>
        {renderPendingSave(isSubmitting)}
        <Formik
          validate={questionValidate}
          validateOnBlur={submitted}
          validateOnChange={submitted}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting();
            submitSurvey(values);
          }}
        >
          {({ values, errors, handleChange, handleSubmit, setFieldValue, isValid }) => (
            <form
              onSubmit={event => {
                event.preventDefault();
                setSubmitted(true);
                if (Object.entries(errors).length) {
                  scrollToRef(scrollFieldRef, 40);
                } else {
                  scrollToRef(scrollTopRef, 40);
                }
                handleSubmit();
              }}
            >
              {!Object.entries(errors).length ? <ScrollAnchor yellow ref={scrollTopRef} /> : null}
              {renderFormFields(surveyData, values, errors, handleChange, setFieldValue, scrollFieldRef)}
              <Box align="center">
                <SurveyButton buttonType="submit" label="submit" margin="xlarge" data-test-id="survey-submit-button" />
              </Box>
            </form>
          )}
        </Formik>
      </Page>
    </Main>
  );
};

Survey.propTypes = {
  match: surveyMatchParams
};

export default Survey;
