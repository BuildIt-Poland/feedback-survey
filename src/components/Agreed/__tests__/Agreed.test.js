import React from 'react';
import { create } from 'react-test-renderer';

import Agreed from '../Agreed';

describe('COMPONENT - Agreed', () => {
  it('renders correctly', () => {
    const component = create(<Agreed />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
