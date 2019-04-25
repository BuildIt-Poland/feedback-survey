import React from 'react';
import { create } from 'react-test-renderer';

import CustomSelect from '..';

describe('COMPONENT - CustomSelect', () => {
  it('renders correctly', () => {
    const options = ['One', 'Two', 'Three'];
    const component = create(<CustomSelect options={options} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
