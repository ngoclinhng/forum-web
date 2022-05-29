import React from 'react';
import StyledAppBar from './ui/AppBar';

const navItems = [
  {
    to: '/',
    title: 'Popular'
  },
  {
    to: '/threads',
    title: 'Threads',
    end: true
  },
  {
    to: '/threads/new',
    title: 'Create Thread'
  }
];

export default function AppBar() {
  return <StyledAppBar navItems={navItems} />;
}
