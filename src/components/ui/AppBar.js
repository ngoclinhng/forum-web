import React from 'react';
import './AppBar.css';

function AppBar() {
  return (
    <nav id='appbar'>
      <ul className='appbar__list'>
        <li className='appbar__item'>
          <a href="" className='appbar__link'>
            Popular Threads
          </a>
        </li>
        <li className='appbar__item'>
          <a href="" className='appbar__link'>
            New Threads
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default AppBar;
