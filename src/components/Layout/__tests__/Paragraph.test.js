import React from 'react';
import { create } from 'react-test-renderer';

import Paragraph from '../Paragraph';

describe('COMPONENT - Layout Paragraph', () => {
  it('renders correctly', () => {
    const component = create(<Paragraph />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
