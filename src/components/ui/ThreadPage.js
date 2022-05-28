import React from 'react';
import Container from './Container';
import Paper from './Paper';
import './ThreadPage.css';

export default function ThreadPage({ children }) {
  return (
    <Container>
      <Paper>
        {children}
      </Paper>
    </Container>
  );
}
