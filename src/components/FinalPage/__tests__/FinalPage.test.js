import React from 'react';
import { create } from 'react-test-renderer';

import FinalPage from '../FinalPage';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));

describe('COMPONENT - FinalPage', () => {
  it('renders correctly if submit success', () => {
    const component = create(<FinalPage success={true} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if submit fail', () => {
    const component = create(<FinalPage error="test message" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
