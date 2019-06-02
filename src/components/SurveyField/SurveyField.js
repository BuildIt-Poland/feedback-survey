import React from 'react';
import styled from 'styled-components';
import { arrayOf, string, func } from 'prop-types';
import { Grommet } from 'grommet';

import { spacingLarge, colorRed, colorBlue } from '../../styles/designTokens';
import { formField, answerType } from '../../types';
import RatingField from './RatingField';
import ShortInputField from './ShortInputField';
import LongInputField from './LongInputField';
import SelectField from './SelectField';
import YesNoField from './YesNoField';
import media from '../../styles/media';

const Wrapper = styled.div`
  margin: 3rem 0;
  position: relative;

  span[data-type='required-field'] {
    position: absolute;
    top: 0.3rem;
    color: ${colorRed};
  }

  ${media.mobileM`
    margin: 4.5rem 0rem;
  `}

  ${media.mobileL`
    margin: 3rem 1.5rem;
  `}

  ${media.tablet`
    margin: 5rem ${spacingLarge};
  `}
`;

const theme = {
  select: {
    icons: {
      color: colorBlue
    }
  },
  global: {
    colors: {
      focus: colorBlue,
      brand: colorBlue
    },
    input: {
      weight: '400'
    },
    focus: {
      border: {
        color: colorBlue
      }
    }
  }
};

const getAnswerTypes = (array, answerType) => array.find(item => item.type === answerType).values;

const buildAnswerTypes = ({ answerType, name }, answerTypes) => {
  const types = getAnswerTypes(answerTypes, answerType);
  return types.map(option => {
    return {
      id: `${option}_${name}`,
      value: option,
      label: option
    };
  });
};

const renderFieldByType = (field, answerTypes, value, error, onChange, setFieldValue) => {
  switch (field.type) {
    case 'open-ended': {
      return <LongInputField field={field} error={error} value={value} onChange={onChange} />;
    }
    case 'select': {
      return (
        <SelectField
          field={field}
          options={getAnswerTypes(answerTypes, field.answerType)}
          error={error}
          value={value}
          setFieldValue={setFieldValue}
        />
      );
    }
    case 'radio': {
      return (
        <YesNoField
          field={field}
          options={buildAnswerTypes(field, answerTypes)}
          error={error}
          value={value}
          onChange={onChange}
        />
      );
    }
    case 'rating': {
      return (
        <RatingField
          field={field}
          options={buildAnswerTypes(field, answerTypes)}
          error={error}
          value={value}
          onChange={onChange}
        />
      );
    }
    default: {
      return <ShortInputField field={field} error={error} value={value} onChange={onChange} />;
    }
  }
};

const SurveyField = ({ field, answerTypes, value = '', error, onChange, setFieldValue }) => (
  <Grommet theme={theme}>
    <Wrapper>{renderFieldByType(field, answerTypes, value, error, onChange, setFieldValue)}</Wrapper>
  </Grommet>
);

SurveyField.propTypes = {
  field: formField.isRequired,
  answerTypes: arrayOf(answerType),
  value: string,
  error: string,
  onChange: func,
  setFieldValue: func
};

export default SurveyField;
