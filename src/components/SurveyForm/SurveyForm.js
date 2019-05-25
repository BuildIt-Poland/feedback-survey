import React, { useRef } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { Box } from 'grommet';

import SurveyButton from '../Button';
import SurveyField from '../SurveyField';
import ScrollToFormikError from '../ScrollToError/ScrollToFormikError';
import { FINAL_PATH } from '../../constatnts/routes';
import StyledHeading from '../Layout/Heading';
import { colorWhite } from '../../styles/designTokens';
import Overlay from '../Overlay';
import { DURING_SUBMIT } from '../../constatnts/messages';

const ScrollAnchor = styled.div`
  position: absolute;
`;

const renderFormFields = (
  { questions, answerTypes },
  values,
  errors,
  touched,
  onChange,
  setFieldValue,
  scrollFieldRef
) =>
  questions.map((field, index) => {
    const isFirstError = Object.keys(errors)[0] === field.name;
    return (
      <React.Fragment key={index}>
        {isFirstError ? <ScrollAnchor ref={scrollFieldRef} /> : null}
        <SurveyField
          key={`field-${index}`}
          field={field}
          answerTypes={answerTypes}
          error={touched[field.name] ? errors[field.name] : null}
          value={values[field.name]}
          onChange={onChange}
          setFieldValue={setFieldValue}
        />
      </React.Fragment>
    );
  });

const SurveyForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleSubmit,
  setFieldValue,
  isValid,
  submitCount,
  status,
  isSubmitting,
  surveyData
}) => {
  const scrollFieldRef = useRef(null);

  if (status && status.isSubmitted) {
    return (
      <Redirect
        to={{
          pathname: FINAL_PATH,
          state: { isSuccessSave: status.isSuccessSave, saveErrorMessage: status.saveErrorMessage }
        }}
      />
    );
  }

  if (isSubmitting) {
    return (
      <Overlay>
        <Box animation="pulse" align="center" justify="center" pad="medium" height="90vh">
          <StyledHeading level="2" color={colorWhite}>
            {DURING_SUBMIT}
          </StyledHeading>
        </Box>
      </Overlay>
    );
  }

  return (
    <>
      <ScrollToFormikError formik={{ isValid, submitCount, isSubmitting, errors }} scrollFieldRef={scrollFieldRef} />
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {renderFormFields(surveyData, values, errors, touched, handleChange, setFieldValue, scrollFieldRef)}
        <Box align="center">
          <SurveyButton buttonType="submit" label="submit" margin="xlarge" data-test-id="survey-submit-button" />
        </Box>
      </form>
    </>
  );
};

export default SurveyForm;
