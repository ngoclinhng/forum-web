import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '../components/ui/Container';
import Threads from '../components/Threads';
import { NUM_THREAD_PER_PAGE } from '../components/constants';

export default function ThreadsPage() {
  const { cursor } = useParams();
  return (
    <Container>
      <Threads first={NUM_THREAD_PER_PAGE} after={cursor} />
    </Container>
  );
}
