import React from 'react';
import { create } from 'react-test-renderer';

import Survey from '../Survey';

describe('COMPONENT - Survey', () => {
  it('renders correctly', () => {
    const component = create(<Survey />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
