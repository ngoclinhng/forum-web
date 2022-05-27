import React from 'react';
import Paper from './Paper';
import './NotFound.css';

export default function NotFound() {
  return (
    <Paper>
      <p className='NotFound__message'>
        Sorry! we can't seem to find the page you're looking for.
      </p>
    </Paper>
  );
}
