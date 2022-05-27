import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '../components/ui/Container';
import ThreadPage from '../components/ThreadPage';

export default function NewThreads() {
  const { cursor } = useParams();
  return (
    <Container>
      <ThreadPage first={10} after={cursor} />
    </Container>
  );
}
