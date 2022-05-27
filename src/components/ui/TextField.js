import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Textarea from 'react-textarea-autosize';
import './TextField.css';

function TextField({ fullWidth, error, helperText, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  const handleFocus = (e) => setFocused(true);
  const handleBlur = (e) => setFocused(false);

  return (
    <div className={clsx('TextField__base', {
      'TextField__base--fullWidth': fullWidth
    })}>
      <div className={clsx('TextField__root', {
        'TextField--fullWidth': fullWidth,
        'TextField--focused': focused,
        'TextField--error': error
      })}>
        <Textarea
          className='TextField__textarea'
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
        />
      </div>
      {helperText && (
        <span className='TextField__helperText'>
          {helperText}
        </span>
      )}
    </div>
  );
}

TextField.propTypes = {
  fullWidth: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string
};

TextField.defaultProps = {
  fullWidth: false,
  error: false,
  helperText: null
};

export default TextField;
