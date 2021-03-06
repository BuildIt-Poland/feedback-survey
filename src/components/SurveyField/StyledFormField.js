import styled from 'styled-components';
import { FormField } from 'grommet';

import media from '../../styles/media';
import { fontMedium, fontSmall } from '../../styles/designTokens';

const StyledFormField = styled(FormField)`
  max-width: 80rem;
  div {
    ${props => (props.noBorderBottom ? 'border-bottom: none' : null)}
  }
  input {
    font-weight: 400;

    :focus {
      border-color: red;
    }
  }
  label:first-child {
    margin: 0 0 1rem 0;
    font-size: ${fontSmall};

    &:after {
      color: red;
      content: ${props => (props.required ? "'*'" : "''")};
      margin-left: 0.5rem;
      white-space: nowrap;
    }
  }

  ${media.mobileL`
    label:first-child {
      margin: 0 0 2rem 0;
      font-size: ${fontMedium};
    }
  `}
`;

export default StyledFormField;
