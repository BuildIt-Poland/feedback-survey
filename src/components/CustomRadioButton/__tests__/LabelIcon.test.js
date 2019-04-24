import React from 'react';
import { create } from 'react-test-renderer';

import LabelIcon from '../LabelIcon';

describe('COMPONENT - CustomRadioButton LabelIcon', () => {
  it('renders correctly', () => {
    const component = create(<LabelIcon />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
