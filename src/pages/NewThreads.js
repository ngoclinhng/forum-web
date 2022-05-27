import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '../components/ui/Container';
import PopularThreadList from '../components/ui/PopularThreads';

export default function NewThreads() {
  const { cursor } = useParams();
  console.log('afterCursor: ', cursor);
  return (
    <Container>
      <PopularThreadList />
    </Container>
  );
}
