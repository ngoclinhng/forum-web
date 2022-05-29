import React from 'react';
import { useParams } from 'react-router-dom';
import Thread from '../components/Thread';

export default function ThreadPage() {
  const { id } = useParams();
  return <Thread id={id} />;
}
