import styled from 'styled-components';

import media from '../../styles/media';

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: stretch;
  background: none;

  ${media.mobileL`
    background: ${({ bgImage }) => (bgImage ? `url(${bgImage}) no-repeat` : 'none')};
    background-position-x: 2%;
    background-position-y: 99%;
    background-size: 21%;
  `}

  ${media.tablet`
    background-position-x: 1%;
    background-position-y: 99%;
    background-size: 19%;
  `}

  ${media.laptop`
    background-position-x: 3%;
    background-position-y: 99%;
    background-size: 13%;
  `}

  ${media.laptopL`
    background-position-x: calc((100% - 107rem)/2 - 6%);
    background-position-y: 94%;
    background-size: 12%;
  `}
`;

export default Main;
