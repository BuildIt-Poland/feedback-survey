import React from 'react';
import { create } from 'react-test-renderer';

import { MemoryRouter } from 'react-router-dom';

import App from '../App';

describe('COMPONENT - App', () => {
  it('renders correctly default route, which should contain correct headline', () => {
    const component = create(
      <MemoryRouter initialEntries={['/survey']} initialIndex={1}>
        <App />
      </MemoryRouter>
    );

    // expect(container.querySelectorAll('h1')[0]).toHaveTextContent('Performance Snapshot on RSR Consultant:');
    expect(component.toJSON()).toMatchSnapshot();
  });
});
