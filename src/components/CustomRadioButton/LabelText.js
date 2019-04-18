import styled from 'styled-components';

import { colorDarkBlue } from '../../styles/variables';

const LabelText = styled.label`
  width: 15rem;
  height: 4.8rem;
  line-height: 4.8rem;
  text-transform: uppercase;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  color: ${colorDarkBlue};
  border: 0.2rem ${colorDarkBlue} solid;
  margin: 0;
`;

export default LabelText;
