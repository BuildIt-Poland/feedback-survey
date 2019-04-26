import React from 'react';
import styled from 'styled-components';
import { Grommet } from 'grommet';

import { spacingLarge, fontMedium, spacingMedium } from '../../styles/variables';
import RatingField from './RatingField';
import ShortInputField from './ShortInputField';
import LongInputField from './LongInputField';
import SelectField from './SelectField';
import YesNoField from './YesNoField';

const Wrapper = styled.div`
  margin: 5rem ${spacingLarge};
`;

const theme = {
  formField: {
    extend: {
      'font-weight': 400,
      label: {
        'font-size': fontMedium,
        'margin-bottom': spacingMedium
      }
    }
  }
};

const renderImageOption = option => <img width="50" src={'./image/' + option.toLowerCase() + '.svg'} alt={option} />;

const getAnswerTypes = (array, answerType) => array.find(item => item.type === answerType).values;

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

const SurveyField = ({ field, answerTypes }) => {
  if (!field) {
    return null;
  }
  return (
    <Grommet theme={theme}>
      <Wrapper>{renderFieldByType(field, answerTypes)}</Wrapper>
    </Grommet>
  );
};

export default SurveyField;
