import styled from 'styled-components';

const Container = styled.div`
  /* display: grid;
  grid-template-areas: 'header' 'main' 'footer';
  grid-template-columns: 100%;
  grid-template-rows: auto 1fr auto;
  min-height: 100%; */
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default Container;
