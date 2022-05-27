import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Overlay from './Overlay';
import './Button.css';

function Button({ color, children, disabled, ...rest }) {
  return (
    <button
      className={clsx('Button__root', {
        [`Button--${color}`]: !disabled
      })}
      disabled={disabled}
      {...rest}
    >
      <span className='Button__label'>{children}</span>
      <Overlay />
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']).isRequired
};

Button.defaultProps = {
  color: 'secondary'
};

export default Button;
