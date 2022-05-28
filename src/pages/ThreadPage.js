import React from 'react';
import { useParams } from 'react-router-dom';
import ThreadDetails from '../components/ThreadDetails';

export default function ThreadPage() {
  const { id } = useParams();
  return <ThreadDetails id={id} />;
}
