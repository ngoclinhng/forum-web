import React from 'react';
import { useParams } from 'react-router-dom';
import StyledThreadPage from '../components/ui/ThreadPage';

export default function ThreadPage() {
  const { id } = useParams();
  return <StyledThreadPage />;
}
