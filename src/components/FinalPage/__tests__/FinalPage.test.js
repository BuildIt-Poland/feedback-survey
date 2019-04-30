import React from 'react';
import { create } from 'react-test-renderer';

import FinalPage from '../FinalPage';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));

describe('COMPONENT - FinalPage', () => {
  it('renders correctly if submit success', () => {
    const location = {
      state: {
        isSuccessSave: true
      }
    };
    const component = create(<FinalPage location={location} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if submit fail', () => {
    const location = {
      state: {
        saveErrorMessage: 'error occured'
      }
    };
    const component = create(<FinalPage location={location} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
