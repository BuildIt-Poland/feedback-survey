import React from 'react';
import styled from 'styled-components';
import { FormField, RadioButtonGroup, Select } from 'grommet';

import { spacingLarge } from '../styles/variables';

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
      return <FormField name={field.name} label={field.content} required={field.required} />;
    }
    case 'select': {
      return (
        <FormField
          name={field.name}
          label={field.content}
          required={field.required}
          component={Select}
          options={answerOptions[field.answerOptions]}
        />
      );
    }
    case 'radio': {
      return (
        <FormField
          name={field.name}
          label={field.content}
          required={field.required}
          component={RadioButtonGroup}
          options={buildAnswerOptions(field, answerOptions)}
        />
      );
    }
    case 'rating': {
      return (
        <FormField
          name={field.name}
          label={field.content}
          required={true}
          component={RadioButtonGroup}
          options={buildAnswerOptions(field, answerOptions)}
        />
      );
    }
    default: {
      return null;
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
