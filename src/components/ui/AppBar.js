import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';
import clsx from 'clsx';
import './AppBar.css';

function getLinkClassName({ isActive }) {
  return clsx('AppBar__link', {
    'AppBar__link--active': isActive
  });
}

function AppBar({ navItems }) {
  return (
    <nav id='AppBar'>
      <ul className='AppBar__list'>
        {navItems.map(({ to, title, ...rest }) => (
          <li key={title} className='AppBar__item'>
            <Link to={to} className={getLinkClassName} {...rest}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

AppBar.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.shape({
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired
};

export default AppBar;
