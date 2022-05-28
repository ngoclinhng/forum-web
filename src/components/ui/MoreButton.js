import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './MoreButton.css';

function MoreButton({ className, label, ...rest }) {
  return (
    <button className={clsx('MoreButton', className)} {...rest}>
      {label}
    </button>
  );
}

MoreButton.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string
};

MoreButton.defaultProps = {
  label: 'More...'
};

export default MoreButton;
