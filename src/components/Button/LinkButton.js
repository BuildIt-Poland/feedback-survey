import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';

import SurveyButton from '.';

const LinkButton = ({ linkTo, label }) => (
  <Link to={linkTo}>
    <SurveyButton label={label} />
  </Link>
);

LinkButton.propTypes = {
  linkTo: string.isRequired,
  label: string.isRequired
};

export default LinkButton;
