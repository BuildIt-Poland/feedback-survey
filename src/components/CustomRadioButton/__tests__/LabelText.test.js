import React from 'react';
import { create } from 'react-test-renderer';

import LabelText from '../LabelText';

describe('COMPONENT - CustomRadioButton LabelText', () => {
  it('renders correctly', () => {
    const component = create(<LabelText />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
