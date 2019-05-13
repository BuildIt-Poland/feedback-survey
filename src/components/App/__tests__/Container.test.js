import React from 'react';
import { create } from 'react-test-renderer';

import Container from '../Container';

describe('COMPONENT - App Container', () => {
  it('renders correctly', () => {
    const component = create(<Container />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
