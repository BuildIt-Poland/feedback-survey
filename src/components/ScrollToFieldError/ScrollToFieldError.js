import React, { useState, useEffect } from 'react';
import { getIn } from 'formik';
import styled from 'styled-components';

const Wrapper = styled.div`
  div {
    :focus {
      outline: none;
    }
  }
`;

const getFormInputs = name => {
  if (typeof document === 'undefined') {
    return [];
  }
  const form = document.forms[name];

  return form && form.length ? Array.prototype.slice.call(form) : [];
};

const ScrollToFieldError = ({ formik, children }) => {
  const [input, setInput] = useState({});

  useEffect(() => {
    if (formik.submitCount >= 0 && !formik.isValid) {
      const firstInput = getFormInputs('surveyForm').find(input => input.name && getIn(formik.errors, input.name));

      if (firstInput) {
        setInput({ input: firstInput.name });
      }
    }
  }, [formik.submitCount]);

  return <Wrapper>{children(input)}</Wrapper>;
};

export default ScrollToFieldError;
