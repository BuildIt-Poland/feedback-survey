import React from 'react';
import styled from 'styled-components';
import { arrayOf } from 'prop-types';
import { Grommet } from 'grommet';

import { spacingLarge, fontMedium, spacingMedium, colorRed } from '../../styles/designTokens';
import { formField, answerType } from '../../types';
import RatingField from './RatingField';
import ShortInputField from './ShortInputField';
import LongInputField from './LongInputField';
import SelectField from './SelectField';
import YesNoField from './YesNoField';

const Wrapper = styled.div`
  margin: 5rem ${spacingLarge};
  position: relative;

  span[data-type='required-field'] {
    position: absolute;
    top: 0.3rem;
    color: ${colorRed};
  }
`;

const theme = {
  formField: {
    extend: {
      label: {
        'font-size': fontMedium,
        'margin-bottom': spacingMedium
      }
    }
  },
  global: {
    input: {
      weight: '400'
    }
  }
};

const getAnswerTypes = (array, answerType) => array.find(item => item.type === answerType).values;

const buildAnswerTypes = ({ answerType, type, id }, answerTypes) => {
  const types = getAnswerTypes(answerTypes, answerType);
  return types.map(option => {
    return {
      id: `${option}_${id}`,
      value: option,
      label: option
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

const SurveyField = ({ field, answerTypes }) => (
  <Grommet theme={theme}>
    <Wrapper>{renderFieldByType(field, answerTypes)}</Wrapper>
  </Grommet>
);

SurveyField.propTypes = {
  field: formField.isRequired,
  answerTypes: arrayOf(answerType)
};

export default SurveyField;
