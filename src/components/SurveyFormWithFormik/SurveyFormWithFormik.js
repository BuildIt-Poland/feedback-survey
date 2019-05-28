import { withFormik } from 'formik';

import { REQUIRED_QUESTION } from '../../constatnts/messages';
import { saveSurvey } from '../../services/api';
import SurveyForm from '../SurveyForm';

const questionValidate = (values, props) => {
  const { questions } = props.surveyData;
  let errors = {};

  questions
    .filter(item => item.required)
    .filter(item => !values[item.name])
    .forEach(item => {
      errors[item.name] = REQUIRED_QUESTION;
    });

  return errors;
};

const setInitialValues = props => {
  const { questions } = props.surveyData;
  const init = {};

  questions.map(item => (init[item.name] = ''));

  return init;
};

const removeEmptyValues = obj => {
  Object.keys(obj).forEach(key => obj[key] === '' && delete obj[key]);
};

const handleSubmit = (values, { props, setStatus }) => {
  const { surveyId, employeeName } = props;
  const surveyStatus = {
    isSuccessSave: false,
    saveErrorMessage: '',
    isSubmitted: false
  };
  removeEmptyValues(values);
  const data = {
    surveyId,
    employeeName,
    answers: values
  };

  const saveData = async data => {
    try {
      await saveSurvey(data);
      surveyStatus.isSuccessSave = true;
    } catch (error) {
      surveyStatus.saveErrorMessage = error.message;
    }
    surveyStatus.isSubmitted = true;
    setStatus(surveyStatus);
  };

  saveData(data);
};

const SurveyFormWithFormik = withFormik({
  mapPropsToValues: setInitialValues,
  validate: questionValidate,
  handleSubmit: handleSubmit
})(SurveyForm);

export default SurveyFormWithFormik;
