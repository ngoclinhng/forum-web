import React from 'react';
import clsx from 'clsx';
import './Paper.css';

export default function Paper({ className, ...rest }) {
  return <div className={clsx('Paper', className)} {...rest} />;
}
