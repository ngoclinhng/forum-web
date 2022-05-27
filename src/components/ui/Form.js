import React from 'react';
import './Form.css';

export default function Form({ children }) {
  return (
    <form
      className='Form'
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      {children}
    </form>
  );
}
