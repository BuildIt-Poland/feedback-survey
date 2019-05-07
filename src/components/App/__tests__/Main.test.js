import React from 'react';
import { create } from 'react-test-renderer';

import Main from '../Main';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));

describe('COMPONENT - App Main', () => {
  it('renders correctly', () => {
    const component = create(<Main />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
