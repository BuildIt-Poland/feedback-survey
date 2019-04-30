import React from 'react';
import { bool, string } from 'prop-types';

import { radioOption } from '../../types';
import InputRadio from './InputRadio';
import LabelIcon from './LabelIcon';
import LabelText from './LabelText';

const renderLabel = (label, id, withIcon) => {
  const LabelComponent = withIcon ? LabelIcon : LabelText;

  return <LabelComponent htmlFor={id}>{label}</LabelComponent>;
};

const CustomRadioButton = ({ radio, name, withIcon = false }) => {
  const { value, label, id } = radio;
  return (
    <>
      <InputRadio type="radio" name={name} value={value} id={id} />
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
