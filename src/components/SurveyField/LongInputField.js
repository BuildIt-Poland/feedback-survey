import React from 'react';
import { FormField, TextArea } from 'grommet';

const LonfInputField = function({ field }) {
  if (!field) {
    return null;
  }
  return (
    <FormField
      name={field.id.toString()}
      label={field.content}
      required={field.required}
      component={TextArea}
      placeholder="Type your answer here"
    />
  );
};

export default LonfInputField;
