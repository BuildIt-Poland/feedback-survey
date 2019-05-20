import { useEffect } from 'react';

const scrollToRef = (ref, offset = 0) => {
  window.scrollTo({
    top: ref.current.offsetTop - offset,
    left: 0,
    behavior: 'smooth'
  });
};

const ScrollToFormikError = ({ formik, scrollFieldRef }) => {
  const effect = () => {
    if (formik.submitCount > 0 && !formik.isSubmitting && !formik.isValid) {
      scrollToRef(scrollFieldRef, 40);
    }
  };

  useEffect(effect, [formik.submitCount, formik.isSubmitting]);
  return null;
};

export default ScrollToFormikError;
