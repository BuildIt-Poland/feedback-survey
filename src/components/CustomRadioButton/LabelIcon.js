import React from 'react';
import styled from 'styled-components';
import RatingIcon from '../Icons/RatingIcon';

import media from '../../styles/media';
import {
  colorDarkBlue,
  colorWhite,
  colorBlue,
  colorRed,
  colorYellow,
  colorTurquoise,
  fontSmall,
  fontXSmall,
  spacingSmall
} from '../../styles/designTokens';

const colorsMap = {
  'below expectations': colorRed,
  average: colorYellow,
  good: colorTurquoise,
  excellent: colorBlue
};

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 7rem;

  :hover {
    cursor: pointer;
  }

  svg {
    width: 4rem;
    height: 4rem;
  }

  span {
    color: ${colorDarkBlue};
    font-size: ${fontXSmall};
    text-transform: lowercase;
    text-align: center;
    line-height: 1.2;
    margin-top: 0.5rem;
  }

  input:not(:checked) + & svg {
    fill: ${props => colorsMap[props.iconType]};
  }

  input:not(:checked) + &:hover svg,
  input:checked + & svg {
    background-color: ${props => colorsMap[props.iconType]};
    fill: ${colorWhite};
    border-radius: 0.55rem;
  }

  input:not(:checked) + &:hover svg g path:last-child,
  input:checked + & svg g path:last-child {
    fill: ${props => colorsMap[props.iconType]};
  }

  ${media.mobileM`
    width: 8.8rem;
    svg {
      width: 5.5rem;
      height: 5.5rem;
    }

    span {
      font-size: ${fontSmall};
    }
  `}

  ${media.mobileL`
    width: 8.8rem;

    svg {
      width: 6rem;
      height: 6rem;
    }

    span {
      font-size: ${fontSmall};
    }

    input:not(:checked) + &:hover svg,
    input:checked + & svg {
      border-radius: 0.8rem;
    }
  `}

  ${media.tablet`
    width: 10rem;

    svg {
      width: 7.5rem;
      height: 7.5rem;
    }

    span {
      font-size: ${fontSmall};
      margin-top: ${spacingSmall};
    }

    input:not(:checked) + &:hover svg,
    input:checked + & svg {
      border-radius: 1rem;
    }
  `}
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
