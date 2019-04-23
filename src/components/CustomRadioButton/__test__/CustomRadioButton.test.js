import React from 'react';
import { create } from 'react-test-renderer';

import CustomRadioButton from '../CustomRadioButton';

describe('COMPONENT - CustomRadioButton', () => {
  it('renders correctly', () => {
    const component = create(<CustomRadioButton />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
