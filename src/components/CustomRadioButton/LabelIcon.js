import React from 'react';
import styled from 'styled-components';
import RatingIcon from '../Icons/RatingIcon';

import {
  colorDarkBlue,
  colorWhite,
  colorBlue,
  colorRed,
  colorYellow,
  colorTurquoise,
  fontSmall,
  spacingSmall
} from '../../styles/designTokens';

const colorsMap = {
  bad: colorRed,
  average: colorYellow,
  good: colorTurquoise,
  excellent: colorBlue
};

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;

  :hover {
    cursor: pointer;
  }

  span {
    color: ${colorDarkBlue};
    font-size: ${fontSmall};
    text-transform: lowercase;
    margin-top: ${spacingSmall};
  }

  input:not(:checked) + & svg {
    fill: ${props => colorsMap[props.iconType]};
  }

  input:not(:checked) + &:hover svg,
  input:checked + & svg {
    background-color: ${props => colorsMap[props.iconType]};
    fill: ${colorWhite};
    border-radius: 1rem;
  }

  input:not(:checked) + &:hover svg g path:last-child,
  input:checked + & svg g path:last-child {
    fill: ${props => colorsMap[props.iconType]};
  }
`;

const LabelIcon = ({ label, htmlFor }) => {
  return (
    <Label htmlFor={htmlFor} iconType={label.toLowerCase()}>
      <RatingIcon iconType={label.toLowerCase()} />
      <span>{label}</span>
    </Label>
  );
};

export default LabelIcon;
