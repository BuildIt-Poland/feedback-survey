import React from 'react';
import { create } from 'react-test-renderer';

import Welcome from '../Welcome';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));

describe('COMPONENT - Welcome', () => {
  it('renders correctly with params', () => {
    const match = {
      params: {
        surveyId: '12345',
        employeeName: 'John'
      }
    };
    const component = create(<Welcome match={match} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly without params', () => {
    const component = create(<Welcome />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
