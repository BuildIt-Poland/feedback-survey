import React from 'react';
import styled from 'styled-components';

import { spacingLarge } from '../../styles/variables';
import RatingField from './RatingField';
import ShortInputField from './ShortInputField';
import LongInputField from './LongInputField';
import SelectField from './SelectField';
import YesNoField from './YesNoField';

const Wrapper = styled.div`
  margin: 50rem ${spacingLarge};
`;

const renderImageOption = option => {
  return (
    <>
      <img width="50" src={'./image/' + option.toLowerCase() + '.svg'} alt={option} />
      <span>{option}</span>
    </>
  );
};

const buildAnswerOptions = (field, answerOptions) => {
  return answerOptions[field.answerOptions].map(option => {
    const label = field.type === 'rating' ? renderImageOption(option) : option;
    return {
      id: option + '_' + field.id,
      value: option,
      label
    };
  });
};

const renderFieldByType = (field, answerOptions) => {
  switch (field.type) {
    case 'open-ended': {
      return <LongInputField field={field} />;
    }
    case 'select': {
      return <SelectField field={field} options={answerOptions[field.answerOptions]} />;
    }
    case 'radio': {
      return <YesNoField field={field} options={buildAnswerOptions(field, answerOptions)} />;
    }
    case 'rating': {
      return <RatingField field={field} options={buildAnswerOptions(field, answerOptions)} />;
    }
    default: {
      return <ShortInputField field={field} />;
    }
  }
};

const SurveyField = function({ field, answerOptions }) {
  if (!field) {
    return null;
  }
  return <Wrapper>{renderFieldByType(field, answerOptions)}</Wrapper>;
};

export default SurveyField;
