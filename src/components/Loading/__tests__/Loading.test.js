import React from 'react';
import { create } from 'react-test-renderer';

import Loading from '../Loading';

describe('COMPONENT - Loading', () => {
  it('renders correctly', () => {
    const component = create(<Loading />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
