import React from 'react';
import StyledAppBar from './ui/AppBar';

const navItems = [
  {
    to: '/',
    title: 'Popular Threads'
  },
  {
    to: '/new-threads',
    title: 'New Threads'
  },
  {
    to: '/threads/new',
    title: 'Create thread'
  }
];

export default function AppBar() {
  return <StyledAppBar navItems={navItems} />;
}
