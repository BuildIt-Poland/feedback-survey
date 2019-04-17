import React from 'react';
import { Link } from 'react-router-dom';
import SurveyButton from './SurveyButton';

function LinkButton({ linkTo, label }) {
  return (
    <Link to={linkTo}>
      <SurveyButton label={label} />
    </Link>
  );
}

export default LinkButton;