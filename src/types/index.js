import { shape, string, bool, element, arrayOf, oneOfType } from 'prop-types';

export const radioOption = shape({
  id: string.isRequired,
  label: oneOfType([string, element]).isRequired,
  value: string.isRequired
});

export const answerType = shape({
  type: string.isRequired,
  values: arrayOf(string).isRequired
});

export const formField = shape({
  id: string.isRequired,
  content: string.isRequired,
  required: bool.isRequired,
  type: string.isRequired,
  name: string,
  answerType: string
});

export const surveyData = shape({
  questions: arrayOf(formField),
  answerTypes: arrayOf(answerType)
});

export const surveyMathParams = shape({
  params: shape({
    surveyId: string
  })
});
