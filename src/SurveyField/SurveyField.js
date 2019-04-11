import React from 'react';
import styled from 'styled-components';
import { FormField, RadioButtonGroup, Select } from 'grommet';
import { spacingLarge } from '../styles/variables';

const Wrapper = styled.div`
  margin: 50rem ${spacingLarge};
`;

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
          options={answerOptions[field.answerOptions]}
        />
      );
    }
    case 'rating': {
      return (
        <FormField
          name={field.name}
          label={field.content}
          required={field.required}
          component={RadioButtonGroup}
          options={answerOptions[field.answerOptions]}
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
