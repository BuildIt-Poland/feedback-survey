import React from 'react';
import { create } from 'react-test-renderer';

import SurveyField from '../SurveyField';

const props = {
  field: {
    id: '123',
    content: 'Question content',
    required: false,
    options: ['monthly', 'quaterly', 'annual'],
    answerType: 'kindOfFeedback',
    type: ''
  },
  answerTypes: [
    {
      type: 'kindOfFeedback',
      values: ['monthly', 'quaterly', 'annual']
    },
    {
      type: 'yesNo',
      values: ['Yes', 'No']
    },
    {
      type: 'rating',
      values: ['Bad', 'Average', 'Good', 'Excellent']
    }
  ]
};

describe('COMPONENT - SurveyField', () => {
  it('renders correctly', () => {
    const component = create(<SurveyField {...props} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with required field', () => {
    const fieldProps = {
      ...props,
      field: {
        ...props.field,
        required: true
      }
    };
    const component = create(<SurveyField {...fieldProps} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly long input field', () => {
    const ratingProps = {
      ...props,
      field: {
        ...props.field,
        type: 'open-ended'
      }
    };
    const component = create(<SurveyField {...ratingProps} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly select field', () => {
    const ratingProps = {
      ...props,
      field: {
        ...props.field,
        type: 'select'
      }
    };
    const component = create(<SurveyField {...ratingProps} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly yes-no field', () => {
    const ratingProps = {
      ...props,
      field: {
        ...props.field,
        type: 'radio',
        answerType: 'yesNo'
      }
    };
    const component = create(<SurveyField {...ratingProps} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly rating field', () => {
    const ratingProps = {
      ...props,
      field: {
        ...props.field,
        type: 'rating',
        answerType: 'rating'
      }
    };
    const component = create(<SurveyField {...ratingProps} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
