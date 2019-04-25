import React from 'react';
import { create } from 'react-test-renderer';

import CustomTextArea from '..';

describe('COMPONENT - CustomTextArea', () => {
  it('renders correctly', () => {
    const component = create(<CustomTextArea />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
