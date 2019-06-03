import React from 'react';
import styled from 'styled-components';
import { bool, string, arrayOf } from 'prop-types';

import media from '../../styles/media';
import CustomRadioButton from '../CustomRadioButton';
import { radioOption } from '../../types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  ${media.mobileXS`
    flex-direction: row;
    justify-content: space-evenly;
  `}
`;

const renderRadioButtons = (options, name, value, withIcon, onChange) =>
  options.map(radio => (
    <CustomRadioButton
      key={radio.id}
      name={name}
      radio={radio}
      withIcon={withIcon}
      onChange={onChange}
      choosenValue={value}
    />
  ));

const CustomRadioButtonGroup = ({ options, name, value, onChange, withIcon = false }) => (
  <Wrapper>{renderRadioButtons(options, name, value, withIcon, onChange)}</Wrapper>
);

CustomRadioButtonGroup.propTypes = {
  options: arrayOf(radioOption).isRequired,
  name: string.isRequired,
  withIcon: bool
};

export default CustomRadioButtonGroup;
