import React from 'react';
import './AppBar.css';

function AppBar() {
  return (
    <nav id='AppBar'>
      <ul className='AppBar__list'>
        <li className='AppBar__item'>
          <a href="" className='AppBar__link AppBar__link--active'>
            Popular Threads
          </a>
        </li>
        <li className='AppBar__item'>
          <a href="" className='AppBar__link'>
            New Threads
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default AppBar;
