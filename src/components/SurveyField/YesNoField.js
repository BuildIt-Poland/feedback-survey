import React from 'react';
import PropTypes from 'prop-types';
import { FormField } from 'grommet';

import { formField, radioOption } from '../../types';
import CustomRadioButtonGroup from '../CustomRadioButtonGroup';

const YesNoField = ({ field, options }) => {
  return (
    <FormField
      name={field.id}
      label={field.content}
      required={field.required}
      component={CustomRadioButtonGroup}
      options={options}
      width="medium"
      withIcon={false}
    />
  );
};

YesNoField.propTypes = {
  field: formField.isRequired,
  options: PropTypes.arrayOf(radioOption)
};

export default YesNoField;
