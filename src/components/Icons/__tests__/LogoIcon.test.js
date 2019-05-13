import React from 'react';
import { create } from 'react-test-renderer';

import LogoIcon from '../LogoIcon';

describe('COMPONENT - Layout LogoIcon', () => {
  it('renders correctly', () => {
    const component = create(<LogoIcon />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
