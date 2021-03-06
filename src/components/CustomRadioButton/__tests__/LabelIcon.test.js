import React from 'react';
import { create } from 'react-test-renderer';

import LabelIcon from '../LabelIcon';

describe('COMPONENT - CustomRadioButton LabelIcon', () => {
  it('renders correctly', () => {
    const component = create(<LabelIcon label="test" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
