import React from 'react';
import styled from 'styled-components';

import { spacingLarge } from '../../styles/variables';
import RatingField from './RatingField';
import ShortInputField from './ShortInputField';
import LongInputField from './LongInputField';
import SelectField from './SelectField';
import YesNoField from './YesNoField';

const Wrapper = styled.div`
  margin: 15rem ${spacingLarge};
`;

const renderImageOption = option => {
  return (
    <>
      <img width="50" src={'./image/' + option.toLowerCase() + '.svg'} alt={option} />
      <span>{option}</span>
    </>
  );
};

const getAnswerTypes = (array, answerType) => {
  return array.find(item => item.type === answerType).values;
};

const buildAnswerTypes = (field, answerTypes) => {
  const types = getAnswerTypes(answerTypes, field.answerType);
  return types.map(option => {
    const label = field.type === 'rating' ? renderImageOption(option) : option;
    return {
      id: option + '_' + field.id,
      value: option,
      label
    };
  });
};

const renderFieldByType = (field, answerTypes) => {
  switch (field.type) {
    case 'open-ended': {
      return <LongInputField field={field} />;
    }
    case 'select': {
      return <SelectField field={field} options={getAnswerTypes(answerTypes, field.answerType)} />;
    }
    case 'radio': {
      return <YesNoField field={field} options={buildAnswerTypes(field, answerTypes)} />;
    }
    case 'rating': {
      return <RatingField field={field} options={buildAnswerTypes(field, answerTypes)} />;
    }
    default: {
      return <ShortInputField field={field} />;
    }
  }
};

const SurveyField = function({ field, answerTypes }) {
  if (!field) {
    return null;
  }
  return <Wrapper>{renderFieldByType(field, answerTypes)}</Wrapper>;
};

export default SurveyField;
