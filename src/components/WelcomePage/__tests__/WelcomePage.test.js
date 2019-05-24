import React from 'react';
import { create } from 'react-test-renderer';

import WelcomePage from '../WelcomePage';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));

describe('COMPONENT - WelcomePage', () => {
  it('renders correctly with params', () => {
    const match = {
      params: {
        surveyId: '12345',
        employeeName: 'John'
      }
    };
    const component = create(<WelcomePage match={match} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly without params', () => {
    const component = create(<WelcomePage />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
