import { css } from 'styled-components';

const breakpoints = {
  large: 1680,
  desktop: 1024,
  tablet: 768,
  phone: 420
};

const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default media;
