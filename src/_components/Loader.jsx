import React from 'react';
import {
  string,
  bool,
} from 'prop-types';

import loader from '../assets/images/loader.svg';

const propTypes = {
  className: string,
  isLoading: bool,
};

const defaultProps = {
  className: '',
  isLoading: false,
};

const Loader = ({ className, isLoading }) => {
  if (!isLoading) { return null; }

  return (
    <div className={`loader ${className}`}>
      <img src={loader} alt="Response loader" />
    </div>
  );
};

Loader.propTypes = propTypes;
Loader.defaultProps = defaultProps;

export default Loader;
