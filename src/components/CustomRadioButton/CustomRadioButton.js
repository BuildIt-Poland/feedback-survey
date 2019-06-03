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

const CustomRadioButton = ({ radio, name, choosenValue, onChange, withIcon = false }) => {
  const { value, label, id } = radio;
  const isChecked = value === choosenValue;
  return (
    <>
      <InputRadio
        withIcon={withIcon}
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        id={id}
        checked={isChecked}
      />
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
