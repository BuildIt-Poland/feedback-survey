import React from 'react';
import { create } from 'react-test-renderer';

import Heading from '../Heading';

describe('COMPONENT - Layout Heading', () => {
  it('renders correctly', () => {
    const component = create(<Heading />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
