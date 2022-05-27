import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import clsx from 'clsx';
import './AppBar.css';

function getLinkClassName({ isActive }) {
  return clsx('AppBar__link', {
    'AppBar__link--active': isActive
  });
}

const navItems = [
  {
    to: '/',
    title: 'Popular Threads'
  },
  {
    to: '/new-threads',
    title: 'New Threads'
  }
].map((item) => ({
  className: getLinkClassName,
  ...item
}));

function AppBar() {
  return (
    <nav id='AppBar'>
      <ul className='AppBar__list'>
        {navItems.map(({ to, title, className }) => (
          <li key={title} className='AppBar__item'>
            <Link to={to} className={className}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default AppBar;
