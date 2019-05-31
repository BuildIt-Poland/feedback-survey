import styled from 'styled-components';

import media from '../../styles/media';
import { colorWhite, colorBlue } from '../../styles/designTokens';

const LabelText = styled.label`
  width: 15rem;
  height: 4.8rem;
  line-height: 4.8rem;
  text-transform: lowercase;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  margin: 0;
  border-radius: 1rem;

  ${media.phone`
    width: 25%;
    max-width: 15rem;
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
