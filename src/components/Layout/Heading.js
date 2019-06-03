import styled from 'styled-components';
import { Heading } from 'grommet';

import media from '../../styles/media';
import { fontMedium, fontLarge, fontXLarge } from '../../styles/designTokens';

const StyledHeading = styled(Heading)`
  font-weight: 400;
  text-align: center;
  font-size: ${fontMedium};
  line-height: 1.5;

  ${media.tablet`
    font-size: ${fontLarge};
  `};

  ${media.laptop`
    font-size: ${fontXLarge};
  `};
`;

export default StyledHeading;
