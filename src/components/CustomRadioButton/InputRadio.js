import styled from 'styled-components';

const InputRadio = styled.input`
  visibility: hidden;
  height: 0;
  width: 0;

  &:not(:checked) + label {
    opacity: 0.6;
  }

  &:not(:checked) + label:hover {
    opacity: 1;
  }
`;

export default InputRadio;
