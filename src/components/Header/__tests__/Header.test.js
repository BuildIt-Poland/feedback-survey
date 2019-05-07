import React from 'react';
import { create } from 'react-test-renderer';

import Header from '../Header';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));

describe('COMPONENT - Header', () => {
  it('renders correctly', () => {
    const component = create(<Header />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
