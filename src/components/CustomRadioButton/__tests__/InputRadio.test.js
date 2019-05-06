import React from 'react';
import { create } from 'react-test-renderer';

import InputRadio from '../InputRadio';

describe('COMPONENT - CustomRadioButton InputRadio', () => {
  it('renders correctly', () => {
    const component = create(<InputRadio />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
