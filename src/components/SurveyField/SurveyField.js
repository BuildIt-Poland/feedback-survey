import React from 'react';
import { arrayOf } from 'prop-types';
import styled from 'styled-components';
import { Grommet } from 'grommet';

import { spacingLarge, fontMedium, spacingMedium } from '../../styles/designTokens';
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
  }
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

const renderImageOption = option => <img width="50" src={`./image/${option.toLowerCase()}.svg`} alt={option} />;

const getAnswerTypes = (array, answerType) => array.find(item => item.type === answerType).values;

const buildAnswerTypes = ({ answerType, type, id }, answerTypes) => {
  const types = getAnswerTypes(answerTypes, answerType);
  return types.map(option => {
    const label = type === 'rating' ? renderImageOption(option) : option;
    return {
      id: `${option}_${id}`,
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

const requiredField = ({ required }) => {
  return required ? <span data-type="required-field">*</span> : null;
};

const SurveyField = ({ field, answerTypes }) => (
  <Grommet theme={theme}>
    <Wrapper>
      {requiredField(field)} {renderFieldByType(field, answerTypes)}
    </Wrapper>
  </Grommet>
);

SurveyField.propTypes = {
  field: formField.isRequired,
  answerTypes: arrayOf(answerType)
};

export default SurveyField;
