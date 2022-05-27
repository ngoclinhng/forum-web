import React from 'react';
import clsx from 'clsx';
import './Overlay.css';

export default function Overlay({ className }) {
  return <span className={clsx('Overlay', className)} />;
}
