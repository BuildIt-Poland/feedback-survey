import React from 'react';
import { create } from 'react-test-renderer';

import CustomRadioButtonGroup from '..';

describe('COMPONENT - CustomRadioButtonGroup', () => {
  it('renders correctly', () => {
    const component = create(<CustomRadioButtonGroup />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
