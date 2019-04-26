import React from 'react';
import { FormField } from 'grommet';

import CustomTextArea from '../CustomTextArea';

const LonfInputField = ({ field }) => {
  return (
    <FormField
      name={field.id.toString()}
      label={field.content}
      required={field.required}
      component={CustomTextArea}
      placeholder="Type your answer here"
    />
  );
};

export default LonfInputField;
