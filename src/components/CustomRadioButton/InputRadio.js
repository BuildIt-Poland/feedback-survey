import styled from 'styled-components';

import { colorDarkBlue, colorWhite, colorBlue } from '../../styles/designTokens';

const InputRadio = styled.input`
  visibility: hidden;
  height: 0;
  width: 0;

  &:not(:checked) + label {
    color: ${colorDarkBlue};
    border: ${props => (props.withIcon ? 'none' : `0.2rem ${colorDarkBlue} solid`)};
  }

  &:not(:checked) + label svg {
    fill: ${colorDarkBlue};
  }

  &:not(:checked) + label:hover {
    color: ${colorBlue};
    border: ${props => (props.withIcon ? 'none' : `0.2rem ${colorBlue} solid`)};
  }

  &:not(:checked) + label:hover svg {
    fill: ${colorBlue};
  }

  &:checked + label {
    color: ${colorWhite};
    background-color: ${props => (props.withIcon ? 'none' : `${colorBlue}`)};
    border: ${props => (props.withIcon ? 'none' : `0.2rem ${colorBlue} solid`)};
  }

  &:checked + label svg {
    background-color: ${colorBlue};
    fill: ${colorWhite};
    border-radius: 1rem;
  }

  &:checked + label svg g path:last-child {
    fill: ${colorBlue};
  }
`;

export default InputRadio;
