import React from 'react';
import { create } from 'react-test-renderer';

import FinalPage from '../FinalPage';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));

describe('COMPONENT - FinalPage', () => {
  it('renders correctly', () => {
    const location = {
      state: {
        success: true
      }
    };

    const component = create(<FinalPage location={location} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
