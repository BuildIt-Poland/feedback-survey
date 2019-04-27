import React from 'react';
import PropTypes from 'prop-types';
import { FormField } from 'grommet';

import { formField, radioOption } from '../../types';
import CustomRadioButtonGroup from '../CustomRadioButtonGroup';

const RatingField = ({ field, options }) => {
  return (
    <FormField
      name={field.id}
      label={field.content}
      required={field.required}
      component={CustomRadioButtonGroup}
      options={options}
      direction="row-responsive"
      width="48rem"
      withIcon={true}
    />
  );
};

RatingField.propTypes = {
  field: formField.isRequired,
  options: PropTypes.arrayOf(radioOption)
};

export default RatingField;
