import React from 'react';
import { Link } from 'react-router-dom';
import './NextPageLink.css';

export default function NextPageLink(props) {
  return (
    <div className='NextPageLink__root'>
      <Link className='NextPageLink__link' {...props} >
        More...
      </Link>
    </div>
  );
}
