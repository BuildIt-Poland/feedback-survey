import React from 'react';
import { create } from 'react-test-renderer';

import { MemoryRouter } from 'react-router-dom';

import App from '../App';

describe('COMPONENT - App', () => {
  it('renders correctly default route', () => {
    const component = create(
      <MemoryRouter initialEntries={['/']} initialIndex={1}>
        <App />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly survey route', () => {
    const component = create(
      <MemoryRouter initialEntries={['/survey']} initialIndex={1}>
        <App />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly /final route', () => {
    const component = create(
      <MemoryRouter initialEntries={['/final']} initialIndex={1}>
        <App />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
