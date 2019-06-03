import styled from 'styled-components';

import media from '../../styles/media';

const Page = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 1rem;
  max-width: 107rem;

  ${media.mobileL`
    padding: 2rem;
  `}

  ${media.tablet`
    padding: 3rem 4rem 7rem;
  `}
`;

export default Page;
