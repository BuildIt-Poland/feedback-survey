import React from 'react';

import InputRadio from './InputRadio';
import LabelIcon from './LabelIcon';
import LabelText from './LabelText';

const renderLabel = (label, id, withIcon) => {
  return withIcon ? <LabelIcon htmlFor={id}>{label}</LabelIcon> : <LabelText htmlFor={id}>{label}</LabelText>;
};

const CustomRadioButton = function({ name, value, label, id, withIcon }) {
  return (
    <>
      <InputRadio type="radio" name={name} value={value} id={id} />
      {renderLabel(label, id, withIcon)}
    </>
  );
};

export default CustomRadioButton;
