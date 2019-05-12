import React from 'react';
import styled from 'styled-components';
import { bool, string, arrayOf } from 'prop-types';

import CustomRadioButton from '../CustomRadioButton';
import { radioOption } from '../../types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const renderRadioButtons = (options, name, withIcon) =>
  options.map(radio => <CustomRadioButton key={radio.id} name={name} radio={radio} withIcon={withIcon} />);

const CustomRadioButtonGroup = ({ options, name, withIcon = false, onChange }) => (
  <Wrapper onChange={onChange}>{renderRadioButtons(options, name, withIcon)}</Wrapper>
);

CustomRadioButtonGroup.propTypes = {
  options: arrayOf(radioOption).isRequired,
  name: string.isRequired,
  withIcon: bool
};

export default CustomRadioButtonGroup;
