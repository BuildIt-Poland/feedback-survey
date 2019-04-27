import React from 'react';
import { create } from 'react-test-renderer';

import CustomRadioButton from '../CustomRadioButton';

describe('COMPONENT - CustomRadioButton', () => {
  it('renders correctly', () => {
    const props = {
      radio: {
        id: '123',
        label: 'label123',
        value: 'value123'
      },
      name: 'name123',
      withIcon: false
    };
    const component = create(<CustomRadioButton {...props} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
