import React from 'react';
import { create } from 'react-test-renderer';
import { render, cleanup } from 'react-testing-library';

import ScrollToFormikError from '../ScrollToFormikError';

const props = {
  formik: {
    submitCount: 1,
    isSubmitting: false,
    isValid: false
  },
  scrollFieldRef: {
    current: {
      offsetTop: 100
    }
  }
};

afterEach(cleanup);

describe('COMPONENT - ScrollToFormikError', () => {
  beforeEach(() => {
    global.scrollTo = jest.fn();
  });

  it('renders correctly', () => {
    const component = create(<ScrollToFormikError {...props} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('calls scrollToRef with correct values', () => {
    render(<ScrollToFormikError {...props} />);

    expect(global.scrollTo).toHaveBeenCalled();
  });
});
