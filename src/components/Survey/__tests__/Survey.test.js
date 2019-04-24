import React from 'react';
import { create } from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'react-testing-library';

import Survey from '../Survey';

afterEach(cleanup);

describe('COMPONENT - Survey', () => {
  it('renders correctly', () => {
    const component = create(<Survey />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
