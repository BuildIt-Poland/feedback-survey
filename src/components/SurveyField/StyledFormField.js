import styled from 'styled-components';
import { FormField } from 'grommet';

const StyledFormField = styled(FormField)`
  div {
    ${props => (props.noBorderBottom ? 'border-bottom: none' : null)}
  }
  input {
    font-weight: 400;
  }
  label:first-child {
    &:after {
      color: red;
      content: ${props => (props.required ? "'*'" : "''")};
      margin-left: 0.5rem;
    }
  }
`;

export default StyledFormField;
