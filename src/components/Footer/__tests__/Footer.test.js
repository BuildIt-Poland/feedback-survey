import React from 'react';
import { create } from 'react-test-renderer';

import Footer from '../Footer';

describe('COMPONENT - Footer', () => {
  it('renders correctly', () => {
    const component = create(<Footer />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
