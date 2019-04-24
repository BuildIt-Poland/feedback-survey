import React from 'react';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import LinkButton from '../LinkButton';

describe('COMPONENT - SurveyButton LinkButton', () => {
  it('renders correctly', () => {
    const component = create(
      <MemoryRouter initialEntries={['/survey']}>
        <LinkButton />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
