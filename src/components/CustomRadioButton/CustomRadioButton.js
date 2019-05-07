import React from 'react';
import { bool, string } from 'prop-types';

import { radioOption } from '../../types';
import InputRadio from './InputRadio';
import LabelIcon from './LabelIcon';
import LabelText from './LabelText';

const renderLabel = (label, id, withIcon) => {
  if (withIcon) {
    return <LabelIcon htmlFor={id} label={label} />;
  }

  return <LabelText htmlFor={id}>{label}</LabelText>;
};

const CustomRadioButton = ({ radio, name, withIcon = false }) => {
  const { value, label, id } = radio;
  return (
    <>
      <InputRadio withIcon={withIcon} type="radio" name={name} value={value} id={id} />
      {renderLabel(label, id, withIcon)}
    </>
  );
};

CustomRadioButton.propTypes = {
  radio: radioOption.isRequired,
  name: string.isRequired,
  withIcon: bool
};

export default CustomRadioButton;
