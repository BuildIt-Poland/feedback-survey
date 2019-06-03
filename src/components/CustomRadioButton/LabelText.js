import styled from 'styled-components';

import media from '../../styles/media';
import { colorWhite, colorBlue, fontSmall } from '../../styles/designTokens';

const LabelText = styled.label`
  text-transform: lowercase;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  margin: 0.3rem;
  border-radius: 0.55rem;
  padding: 0.5rem 1rem;
  font-size: ${fontSmall};
  min-width: 7rem;

  ${media.mobileM`
    margin: 0;
  `};

  ${media.mobileM`
    padding: 1rem 2rem;
    font-size: 2rem;
  `};

  ${media.mobileL`
    border-radius: 0.8rem;
  `};

  ${media.tablet`
    padding: 1.5rem 3.5rem;
    font-size: 2.2rem;
  `};

  input:not(:checked) + & {
    color: ${colorBlue};
    border: ${props => (props.withIcon ? 'none' : `0.2rem ${colorBlue} solid`)};
  }

  input:not(:checked) + &:hover,
  input:checked + & {
    color: ${colorWhite};
    background-color: ${props => (props.withIcon ? 'none' : `${colorBlue}`)};
    border: ${props => (props.withIcon ? 'none' : `0.2rem ${colorBlue} solid`)};
  }
`;

export default LabelText;
